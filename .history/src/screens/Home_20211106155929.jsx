import React, { useState, useEffect, cloneElement } from "react";
import Crud from "../components/crud-form/Crud";
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

export default function Home() {
  const db = getFirestore(app);
  //add newData
  const addOrEdit = async (tarea, id) => {
    const ref = collection(db, "tareas");
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

  const borrarDatos = async (item) => {
    const ref = doc(db, `tareas`, item );
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
    <Crud
      addOrEdit={addOrEdit}
      editData={editData}
      borrarDatos={borrarDatos}
      db = {db}
   
    />
  );
}
