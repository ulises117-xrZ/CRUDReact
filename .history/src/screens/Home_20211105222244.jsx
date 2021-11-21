import React, { useState, useEffect } from "react";
import Crud from "../components/crud-form/Crud";
import db from "../firebase/firebase";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";

export default function Home() {
  const addOrEdit = async (tarea, id) => {
    const ref = collection(db, "tareas");
     await addDoc(ref, {
      id: id,
      nameTarea: tarea
    }).then(()=>{
      alert("data addes succesfull")
    }).catch(error =>{
      alert(error);
    })
  };

  return <Crud addOrEdit={addOrEdit} />;
}
