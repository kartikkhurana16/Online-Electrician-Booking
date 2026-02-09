import {createContext,useContext,useEffect,useState} from 'react';
import { account } from '../appwriteConfig';


const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(false);

    useEffect(()=>{
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
    const logoutUser=async()=>{
        setLoading(true)
        try {
            await account.deleteSession('current')
            setUser(null)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }
    const registerUser=(userInfo)=>{}
    const checkUser=async()=>{
        try {
            let accountDetails=await account.get();
            setUser(accountDetails)
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const contextdata={
        user,
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