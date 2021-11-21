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
  const fakeData = []
  async function searchDocOrCreate(idDocumento) {
    //crear referencia al documento

    const docRef = doc(db, `tareas/${idDocumento}`);
    //buscar documento
    const data = await getDoc(docRef);
    //revisar si existe
    if (data.exists()) {
      //en caso de que si exista
      const infoDoc = data.data();
      return infoDoc.tareas;
    } else {
      //en caso de que no existe
      await setDoc(docRef, {reacciones: [...fakeData]});
      const data = await getDoc(docRef);
      const infoDoc = data.data();
      return infoDoc.tareas;
    }
  }

  return (
    <>
      <Crud correoUsuario={correoUsuario} />
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
