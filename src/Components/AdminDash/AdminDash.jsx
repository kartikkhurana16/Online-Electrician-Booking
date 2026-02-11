import React, { useEffect, useState } from "react";
import { account } from "../../appwriteConfig";
import { fetchBooking } from "../../fetch";
import { databases } from "../../appwriteConfig";
import "./AdminDash.css";

const AdminDash = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedBooking, setSelectedBooking] = useState(null);


  useEffect(() => {
    const loadBooking = async () => {
      try {
        const data = await account.get();
        console.log(data);
        
        setUser(data)
        const bookingData= await fetchBooking();
        setBookings(bookingData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadBooking();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await account.updatePassword(newPassword, oldPassword);
      alert("Password changed successfully ✅");

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordForm(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (loading) return <p>Loading bookings...</p>;

const completed = async (id) => {
  try {
    const selected = bookings.find((b) => b.$id === id);
    const newStatus =
      selected.Status === "Completed" ? "Pending" : "Completed";
    await databases.updateDocument(
      "698b5260003a2be6b4a6",
      "698b52fd000a50d7d8ed",
      id,
      {
        Status: newStatus,  
      }
    );
    setBookings((prev) =>
      prev.map((b) =>
        b.$id === id ? { ...b, Status: newStatus } : b
      )
    );
  } catch (error) {
    console.error("Database update error:", error);
  }
};


const viewBookingDetails = (booking) => {
  setSelectedBooking(booking);
};




  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-card">
        <div className="profile-section">
          <div className="profile-circle">
            <img src="/src/assets/profile.png"  />
          </div>
        </div>

        {user && (
          <div className="info-section">
            <div className="info-box">{user.name}</div>
            <div className="info-box">{user.email}</div>

            <button
              className="info-box-btn"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
            >
              Change Password
            </button>

            {showPasswordForm && (
              <form className="password-form" onSubmit={handleSubmit}>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <button type="submit">Update Password</button>
              </form>
            )}
          </div>
        )}
      </div>
                <div className="dashboard">
                    {/* Top Summary Section */}
                    <div className="summary-container">
                        <h2 className="title">Application</h2>

                        <div className="summary-cards">
                        <div className="card">
                            <h3>Total Booking</h3>
                            <span>{bookings.length}</span>
                        </div>

                        <div className="card">
                            <h3>Completed</h3>
                            <span>
                            {bookings.filter(b => b.status === "Completed").length}
                            </span>
                        </div>

                        <div className="card">
                            <h3>Pending</h3>
                            <span>
                            {bookings.filter(b => b.status === "Pending").length}
                            </span>
                        </div>
                        </div>
                    </div>

                    {/* Table Header */}
                  <div>
                    <div className="table-row header">
                        <div className="col name">Name, Email</div>
                        <div className="col">Service Type</div>
                        <div className="col">Status</div>
                        <div className="col">Date</div>
                        <div className="col view">View</div>
                    </div>

                    {/* Table Rows */}
                    {bookings.map((booking) => (
                        <div className="table-row" key={booking.$id}>
                        <div className="col name">
                            {booking.Name}<br/> {booking.Email}
                        </div>

                        <div className="col">{booking.WorkType}</div>

                     <button
                      className="Status"
                      onClick={() => completed(booking.$id)}
                      style={{
                        backgroundColor:
                          booking.Status === "Completed"
                            ? "green"
                            : "rgb(255, 211, 36)"
                      }}
                    >
                      {booking.Status}
                    </button>


                        <div className="col">
                            {new Date(booking.DateBooking).toLocaleDateString()}
                            <br/>
                            {booking.TimeSlot}
                        </div>

                        <div className="col view">
                            <button
                            className="view-button"
                            onClick={() => viewBookingDetails(booking)}
                          >
                            View
                          </button>

                        </div>
                        </div>
                    ))}
                    </div>
                    {selectedBooking && (
                      <div className="view-outer-box">
                        <div className="view-inner-box">
                          <div className="view-details">

                            <h3>Booking Details</h3>

                            <p><strong>Name:</strong> {selectedBooking.Name}</p>
                            <p><strong>Email:</strong> {selectedBooking.Email}</p>
                            <p><strong>Work Type:</strong> {selectedBooking.WorkType}</p>
                            <p><strong>Status:</strong> {selectedBooking.Status}</p>
                            <p><strong>Date:</strong> {new Date(selectedBooking.DateBooking).toLocaleDateString()}</p>
                            <p><strong>Time Slot:</strong> {selectedBooking.TimeSlot}</p>

                            <button onClick={() => setSelectedBooking(null)}>
                              Close
                            </button>

                          </div>
                        </div>
                      </div>
                    )}
                    </div>
    </div>
  
  );
};


export default AdminDash;
