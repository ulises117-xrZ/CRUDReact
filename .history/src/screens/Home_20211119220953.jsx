import React from "react";
import RoutesPage from "../routes/Index";


import app from "../firebase/firebase";
import Crud from "../components/crud-form/Crud";
import {
  getFirestore,
  doc,
  updateDoc,
  
} from "firebase/firestore";

import { Button } from "react-bootstrap";
import { signOut, getAuth } from "@firebase/auth";
import { authContext } from "../Context/authProvider";
const auth = getAuth(app);
const db = getFirestore(app);



export default function Home() {
  const deleteData = async (tareas) => {
    const ref = doc(db, "tareas", authContext.user.email);
    await updateDoc(ref, {
      tareas: [...tareas],
    });
  };


  return (

    <div className="container">
      
      <Crud
        deleteData={deleteData}
      />
      <Button
      className="mt-4 mb-4"
        variant="warning"
        type="submit"
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </Button>

    </div>

  );
}
