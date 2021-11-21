import React, {useState, createContext} from 'react';
import {
    signOut,
    getAuth
} from "firebase/auth";
export const authContext = createContext();
export default function AuthProvider({children}) {
    const [user, setUser] = useState('a');

    const contextValue = {

    }
    return (
       <AuthContext.Provider value = {contextValue} ></AuthContext.Provider>
    )
}

