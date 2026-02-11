import {createContext,useContext,useEffect,useState} from 'react';
import { account } from '../appwriteConfig';
import { ID } from "appwrite";


const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(false);
    const [admin,setAdmin]=useState(false);

    useEffect(()=>{
        checkAdmin()
        checkUser()
    },[]);


    const loginUser=async(userInfo)=>{
        setLoading(true)
        try {
            let response =await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails=await account.get()
            console.log("session",response);
            setUser(accountDetails)
            
        } catch (error) {
            console.log(error);
            
        }
        setLoading(false);
    }
   const logoutUser=()=>{
        account.deleteSession('current')
        setUser(null)
    }
    const registerUser=async (userInfo)=>{
        setLoading(true)
         try {
            let response=await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1,
                userInfo.name
            )
            console.log('account.create response:', response)
            await  account.createEmailPasswordSession(
            userInfo.email,
            userInfo.password1
            );
            let accountDetails=await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.error('registerUser error:', error);
            
        }
        setLoading(false)
    }

    const checkUser=async()=>{
        try {
            let accountDetails=await account.get();
            setUser(accountDetails)
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    const checkAdmin=async()=>{
        try {
            let accountDetails=await account.get();
          if(accountDetails.email==="yasir@gmail.com")
          {
            setAdmin(true);
          }
          else{
            setAdmin(false)
          }
        } catch (error) {
            console.log("admin",error);
            
        }
    }

    const contextdata={
        user,
        admin,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextdata}>
            {loading?<p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{return useContext(AuthContext)}
export default AuthContext