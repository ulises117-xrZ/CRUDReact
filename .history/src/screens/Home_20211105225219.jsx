import React, { useState, useEffect } from "react";
import Crud from "../components/crud-form/Crud";
import db from "../firebase/firebase";
import {
  doc,
  getDocs,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";

export default function Home() {
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
  const getFirebaseData = async () => {
    const ref = doc(db, "tareas", "8RcJjnP56yOUuQD3VwaN");
    const snap = await getDoc(ref);
    if (snap.exists()) {
      console.log(snap.data());
    } else {
      alert("doc not exist");
    }
  };

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

  const borrarDatos = async () => {
    const ref = doc(db, "tareas", "8RcJjnP56yOUuQD3VwaN");
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
      getFirebaseData={getFirebaseData}
      editData={editData}
      deleteDoc={borrarDatos}
    />
  );
}
