import React, { useState, useEffect } from "react";
import Crud from "../components/crud-form/Crud";
import { Button } from "react-bootstrap";
import {
  getFirestore,
  doc,
  // getDocs,
  // getDoc,
  setDoc,
  // collection,
  // addDoc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore";
import app from "../firebase/firebase";
import { signOut, getAuth } from "@firebase/auth";
const auth = getAuth(app);
const db = getFirestore(app);

export default function Home({ correoUsuario }) {
  const createData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    await setDoc(
      ref,
      {
        tareas: tareas,
      },
      { merge: true }
    );
    console.log("la data se guardo");
  };

  const deleteData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    await setDoc(ref, {
      tareas: tareas,
    });
    console.log("la data se elimino");
  };

  return (
    <>
      <Crud
        correoUsuario={correoUsuario}
        createData={createData}
        deleteData={deleteData}
        // getDocument={getDocument}
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
      <Button
        variant="success"
        type="submit"
        // onClick={() => {
        //   getDocument();
        // }}
      >
        Get data
      </Button>
    </>
  );
}
