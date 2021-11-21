import React, { useState, useEffect } from "react";
import Crud from "../components/crud-form/Crud";
import { Button } from "react-bootstrap";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import app from "../firebase/firebase";
import { signOut, getAuth } from "@firebase/auth";
const auth = getAuth(app);
const db = getFirestore(app);

export default function Home({ correoUsuario }) {
  const deleteData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    await updateDoc(
      ref,
      {
        tareas: [...tareas],
      },
    );
  };

  async function searchOrAddTask(){
    const docuRef = (db, `usuarios/${correoUsuario}`);
    const consulta = await getDoc()
  }

  return (
    <>
      <Crud
        correoUsuario={correoUsuario}
        // createData={createData}
        deleteData={deleteData}
        // getDocument={getDocument}
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
      <Button
        variant="success"
        type="submit"
        // onClick={() => {
        //   getDocument();
        // }}
      >
        Get data
      </Button>
    </>
  );
}
