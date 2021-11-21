import React, {useState, createContext, useEffect} from 'react';
import {
    signOut,
    getAuth
} from "firebase/auth";
import app from '../firebase/firebase';
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(()=>{
        try{
            localStorage.setItem("user", JSON.stringify(user));
        }catch(error){
            localStorage.removeItem("user");
        }
    }, [user]);

    const contextValue = {
        user,
        login(user){
            setUser(user);
        },
        logOut(){
            setUser(null);
            const auth = getAuth(app);
            signOut(auth);
        },
        isLogged(){
            return !!user;
        }
    }

    return (
        <AuthContext.Provider></AuthContext.Provider>
    )
}


