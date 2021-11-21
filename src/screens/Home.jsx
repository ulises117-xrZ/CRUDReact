import React from "react";

import app from "../firebase/firebase";
import Crud from "../components/crud-form/Crud";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

import { useAuth } from "../Context/authProvider";
const db = getFirestore(app);

export default function Home() {
  const authContext = useAuth();
  const deleteData = async (tareas) => {
    const ref = doc(db, "tareas", authContext.usuario.email);
    await updateDoc(ref, {
      tareas: [...tareas],
    });
  };

  return (
    <div className="container mt-5">
      <Crud deleteData={deleteData} />
    </div>
  );
}
