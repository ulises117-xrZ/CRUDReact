import React from "react";
import RoutesPage from "../routes/Index";

import {Header} from '../components/Header.jsx';

import app from "../firebase/firebase";
import Crud from "../components/crud-form/Crud";
import {
  getFirestore,
  doc,
  updateDoc,
  
} from "firebase/firestore";

import { Button } from "react-bootstrap";
import { signOut, getAuth } from "@firebase/auth";
const auth = getAuth(app);
const db = getFirestore(app);



export default function Home({ correoUsuario }) {
  const deleteData = async (tareas) => {
    const ref = doc(db, "tareas", correoUsuario);
    await updateDoc(ref, {
      tareas: [...tareas],
    });
  };


  return (
    <RoutesPage>
    <div className="container">
      <Header />
      <hr />
      <Crud
        correoUsuario={correoUsuario}
        deleteData={deleteData}
      />
      <Button
      className="mt-4 mb-4"
        variant="warning"
        type="submit"
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </Button>

    </div>
    </RoutesPage>
  );
}
