import React, { useState, useEffect } from "react";
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

  // useEffect(()=>{
  //   async function data(){
  //     const data = await getData(correoUsuario);
  //     console.log(data);
  //   }
  //   data();
  // },[]);

  const createData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    await setDoc(ref, {
      tareas: [...tareas],
    });
   
  };

  const getData = async (correoUsuario) => {
    const ref =  doc(db, `/tareas/${correoUsuario}`);
    const data = await getDoc(ref);
    if(data.exists()){
      return data.data().tareas;
    } else{
      alert("error");
    }
  };

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
