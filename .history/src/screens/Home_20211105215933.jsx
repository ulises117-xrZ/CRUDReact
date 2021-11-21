import React, {useState, useEffect} from 'react'
import Crud from '../components/crud-form/Crud';

export default function Home() {
  
   
  const addTask = () =>{
    console.log("hola")
  }

    return (
     <Crud addOrEdit = {addTask} />
  
    )
}
