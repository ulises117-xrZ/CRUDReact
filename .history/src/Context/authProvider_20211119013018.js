import React, {useState, createContext} from 'react';
import {
    signOut,
    getAuth
} from "firebase/auth";
export const authContext = createContext();
export default function authProvider({children}) {

    const contextValue = {

    }
    return (
       <authContext.Provider value = {contextValue} ></authContext.Provider>
    )
}

