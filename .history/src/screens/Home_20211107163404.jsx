import React, { useState, useEffect, cloneElement } from "react";
import Crud from "../components/crud-form/Crud";
import {Button} from 'react-bootstrap';
import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  setDoc,
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "../firebase/firebase";
import { signOut,getAuth } from "@firebase/auth";
const auth = getAuth(app);
export default function Home({nombreUsuario}) {
  const db = getFirestore(app);
  //add newData
  const addOrEdit = async (tarea, id, tipo) => {
    const ref = collection(db, tipo);
    await addDoc(ref, {
      id: id,
      nameTarea: tarea,
    })
      .then(() => {
        alert("data addes succesfull");
      })
      .catch((error) => {
        alert(error);
      });
  };

  //get data
  
  const editData = async (tarea, id) => {
    const ref = doc(db, "tareas", id);
    await updateDoc(ref, {
      id: id,
      nameTarea: tarea,
    })
      .then(() => {
        alert("data edited succes");
      })
      .catch((e) => {
        alert(e);
      });
  };

  const borrarDatos = async (item, coleccion) => {
    const ref = doc(db, coleccion, item );
    console.log(item);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      alert("doc does not exist");
      return;
    }

    await deleteDoc(ref)
      .then(() => {
        alert("delete succes");
      })
      .catch((e) => {
        alert(e);
      });
  };


  return (
    <>
    <Crud
      addOrEdit={addOrEdit}
      editData={editData}
      borrarDatos={borrarDatos}
      db = {db}
      nombreUsuario = {nombreUsuario}
    />
      <Button variant="warning" type="submit" onClick ={()=>{signOut(auth)}}>
      Logout
          </Button>
    </>
  );
}
