import {createContext,useContext,useEffect,useState} from 'react';

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(false);

    useEffect(()=>{
        setLoading(false);
    },[]);

    const loginUser=()=>{}
    const logoutUser=()=>{}
    const registerUser=()=>{}
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