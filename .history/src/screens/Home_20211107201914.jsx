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
 



  return (
    <>
    <Crud
      
    />
      <Button variant="warning" type="submit" onClick ={()=>{signOut(auth)}}>
      Logout
          </Button>
    </>
  );
}
