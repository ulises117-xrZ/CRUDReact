import React, {useState, createContext, useEffect} from 'react';
import {
    signOut,
    getAuth
} from "firebase/auth";
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    return (
        <AuthContext.Provider></AuthContext.Provider>
    )
}


