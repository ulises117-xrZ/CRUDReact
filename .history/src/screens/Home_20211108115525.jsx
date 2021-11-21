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
  const createData = async (tarea, idTarea) => {
   const ref = doc(collection(db, 'tareas'));
   await setDoc(ref, {
     tareas: [{nameTarea: tarea, id: idTarea}]
   })
  };

  return (
    <>
      <Crud correoUsuario={correoUsuario} createData = {createData} />
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
