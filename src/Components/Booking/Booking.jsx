import React, { useState } from 'react';
import {ID} from 'appwrite'
import { account,databases } from '../../appwriteConfig';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input'; 
import "./Booking.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const user=await account.get()
      await databases.createDocument(
        "698b5260003a2be6b4a6",
        "698b52fd000a50d7d8ed",
        ID.unique(),
        {
        Name : `${data.firstName} ${data.lastName}`,
        PhoneNumber: data.phone,
        Email: data.email,
        WorkType: data.workType,
        HouseNumber: data.houseNo,
        Area: data.area,
        FullAddress: data.address,
        Pincode: Number(data.pincode),
        DateBooking: new Date(data.date).toISOString(),
        TimeSlot: data.time
      }
      )
      alert("booking Confirm")
      reset();
    } catch (error) {
      console.log(error);
      alert(" Booking failed. Please try again.");
    } finally{
      setIsSubmitting(false)
    }
  };

  // Handle form errors
  const onError = (errors) => {
    const errorFields = Object.keys(errors);
    const firstError = errors[errorFields[0]]?.message;
    
    alert(`❌ Form Incomplete!\n\n${firstError}\n\nPlease fill all required fields.`);
  };

  return (
    <div className="booking-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Book Your Electrical Service</h2>
        <p className="form-subtitle">Fill in the details below to schedule your appointment</p>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="booking-form">
          
          {/* Name Section */}
          <div className="form-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-row">
              <Input
              className="name-input"
                label="First Name"
                type="text"
                placeholder="Enter first name"
                error={errors.firstName?.message}
                required
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 3,
                    message: 'First name must be at least 3 characters'
                  }
                })}
               />

              <Input
              className="name-input"
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                error={errors.lastName?.message}
                required
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 3,
                    message: 'Last name must be at least 3 characters'
                  }
                })}
                
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h3 className="section-title">Contact Details</h3>
            
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 12345 67890"
              error={errors.phone?.message}
              required
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\s-()]+$/,
                  message: 'Please enter a valid phone number'
                }
              })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              error={errors.email?.message}
              required
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
             
            />
          </div>

          {/* Service Details */}
          <div className="form-section">
            <h3 className="section-title">Service Information</h3>
            
            <div className="w-full mb-4">
              <label className="inline-block mb-1 pl-1 font-medium">
                Type of Work<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border ${
                  errors.workType ? 'border-red-500' : 'border-gray-200'
                } w-full`}
                {...register('workType', {
                  required: 'Please select a type of work'
                })}
              >
                <option value="">Select service type</option>
                <option value="electrical-repair">Electrical Repair</option>
                <option value="installation">New Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="wiring">Wiring Work</option>
                <option value="emergency">Emergency Service</option>
                <option value="other">Other</option>
              </select>
              {errors.workType && (
                <p className="text-red-500 text-sm mt-1 pl-1">{errors.workType.message}</p>
              )}
            </div>
          </div>

          {/* Address Details */}
          <div className="form-section">
            <h3 className="section-title">Service Location</h3>
            
            <Input
              label="House/Flat Number"
              type="text"
              placeholder="e.g., A-101, Building 5"
              error={errors.houseNo?.message}
              required
              {...register('houseNo', {
                required: 'House/Flat number is required'
              })}
            />

            <Input
              label="Area/Street"
              type="text"
              placeholder="Enter area or street name"
              error={errors.area?.message}
              required
              {...register('area', {
                required: 'Area is required'
              })}
            />

            <Input
              label="Full Address"
              type="text"
              placeholder="Enter complete address with landmark"
              error={errors.address?.message}
              required
              {...register('address', {
                required: 'Full address is required',
                minLength: {
                  value: 10,
                  message: 'Please provide a complete address'
                }
              })}
            />

            <Input
              label="Pincode"
              type="text"
              placeholder="Enter 6-digit pincode"
              error={errors.pincode?.message}
              required
              {...register('pincode', {
                required: 'Pincode is required',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'Please enter a valid 6-digit pincode'
                }
              })}
            />
          </div>

          {/* Date & Time */}
          <div className="form-section">
            <h3 className="section-title">Preferred Schedule</h3>
            
            <div className="form-row">
              <Input
                label="Date"
                type="date"
                error={errors.date?.message}
                required
                {...register('date', {
                  required: 'Please select a date',
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return selectedDate >= today || 'Date cannot be in the past';
                  }
                })}
              />

              <Input
                label="Time Slot"
                type="time"
                error={errors.time?.message}
                required
                {...register('time', {
                  required: 'Please select a time slot'
                })}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;