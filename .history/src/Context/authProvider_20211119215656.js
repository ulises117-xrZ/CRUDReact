import React, { useState, createContext, useEffect, useContext } from "react";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase";
export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });
  
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
    }
  }, [user]);

  const contextValue = {
    user,
    login(user) {
      setUser(user);
      console.log("im here baby");
    },
    logOut() {
      setUser(null);
      signOut(auth);
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};


export const useAuth =()=>{
    return useContext(AuthContext);
}