import React, { useState, useEffect, cloneElement } from "react";
import Crud from "../components/crud-form/Crud";
import db from "../firebase/firebase";
import {
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

  const getFirebaseData = async ()=>{
    const ref = doc(db, "tareas");
    const snapshot = await getDoc(ref);

    if(snapshot.exists()){
      console.log("document.data:", snapshot.data());
    }else{
      console.log("No such document!");
    }
  }


  const getAllTask = async ()=>{
    const querySnapshot = await getDocs(collection(db, "tareas"));
    querySnapshot.forEach((doc)=>{
      console.log(doc.id, "=>", doc.data());
    });
  }
  return (
    <Crud
      addOrEdit={addOrEdit}
      editData={editData}
      borrarDatos={borrarDatos}
      getFirebaseData = {getFirebaseData}
      getAllTask = {getAllTask}
    />
  );
}
