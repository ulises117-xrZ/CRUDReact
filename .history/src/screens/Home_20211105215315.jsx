import React, {useState, useEffect} from 'react'
import { nanoid } from "nanoid";
// import addTask from '../utils/tasks';
import {doc, collection, query, where, getDocs} from 'firebase/firestore';
import db from '../firebase/firebase';
import Crud from '../components/crud-form/Crud';

export default function Home() {
  
   
  const addTask = () =>{

  }

    return (
     <Crud />
  
    )
}
