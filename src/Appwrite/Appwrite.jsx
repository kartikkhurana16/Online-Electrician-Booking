import {ID} from 'appwrite'
import { account } from '../appwriteConfig'
const Booking = async(formData)=>{
    const user=await account.get();

    await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
            Name: formData.name,
            PhoneNumber: formData.phoneNumber,
            Email: formData.email,
            WorkType: formData.workType,
            HouseNumber: formData.houseNumber,
            Area: formData.area,
            FullAddress: formData.fullAddress,
            Pincode: Number(formData.pincode),
            DateBooking: new Date(formData.dateBooking).toISOString(),
            TimeSlot: formData.timeSlot
        }
    )
}