import { account, databases } from "./appwriteConfig";
const Database_Id="698b5260003a2be6b4a6"
const Collection_Id= "698b52fd000a50d7d8ed"

export const fetchBooking= async()=>{
     const response = await databases.listDocuments(
        Database_Id,
        Collection_Id
    )
    return response.documents;
}