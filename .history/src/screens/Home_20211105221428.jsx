import React, {useState, useEffect} from 'react'
import Crud from '../components/crud-form/Crud';
import db from '../firebase/firebase';
import {getFirestore, doc, getDoc, setDoc, , addDoc, } from 'firebase/firestore'

export default function Home() {
  
   
  const addOrEdit = (taskObject) =>{
    
    console.log(taskObject);
  }

    return (
     <Crud addOrEdit = {addOrEdit} />
  
    )
}
