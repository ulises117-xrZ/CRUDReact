import React, {useState, createContext, useEffect} from 'react';
import {
    signOut,
    getAuth
} from "firebase/auth";
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(()=>{
        try{
            localStorage.setItem("user", JSON.stringify(user));
        }catch(error){
            localStorage.removeItem("user");
        }
    }, [user])

    return (
        <AuthContext.Provider></AuthContext.Provider>
    )
}


