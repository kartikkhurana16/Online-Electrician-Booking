import {ID} from 'appwrite'
import { account } from '../appwriteConfig'
const Booking = async(formData)=>{
    const user=await account.get();

    await databases.createDocument(
        "698b5260003a2be6b4a6",
        "698b52fd000a50d7d8ed",
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