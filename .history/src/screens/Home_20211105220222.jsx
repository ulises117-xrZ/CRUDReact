import React, {useState, useEffect} from 'react'
import Crud from '../components/crud-form/Crud';
import db from '../firebase/firebase';

export default function Home() {
  
   
  const addTask = () =>{
  }

    return (
     <Crud addTask = {addTask} />
  
    )
}
