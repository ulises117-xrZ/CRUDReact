import React, { useState, useEffect, cloneElement } from "react";
import Crud from "../components/crud-form/Crud";
import { Button } from "react-bootstrap";
import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "../firebase/firebase";
import { signOut, getAuth } from "@firebase/auth";
const auth = getAuth(app);
const db = getFirestore(app);

export default function Home({ correoUsuario }) {
  const [array, setArray] = useState([]);
  const createData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    const data = await getDoc(ref);
    if (data.exists()) {
      console.log(data.data().tareas);
      setArray(data.data().tareas);
    } 
      await setDoc(ref, {
        tareas: [...tareas],
      });
      console.log("data enviad");
    
  };

  const getData = async ()=>{
    const ref = doc(db, "tareas", correoUsuario);
    const data = await getDoc(ref);
      console.log(data.data().tareas);
      setArray(data.data().tareas);
  
  }

  return (
    <>
      <Crud
        correoUsuario={correoUsuario}
        createData={createData}
        getData={getData}
      />
      <Button
        variant="warning"
        type="submit"
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </Button>
    </>
  );
}
