import React, { useState, useEffect, memo } from "react";
import { nanoid } from "nanoid";
import Tareas from "./Tareas";
import Completed from "./Completed";
import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";
import app from "../../firebase/firebase";

const db = getFirestore(app);

export default function Crud({ correoUsuario, createData, deleteData}) {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited] = useState(null);


  useEffect(()=>{
    async function getFetched(){
    await getDocument(tareas, setTareas);
    }

    getFetched();
  },[]); 



  async function getDocument(tareas, setTareas){
      console.log(`correoUsuario`, correoUsuario)

      const ref = doc(db, "tareas", correoUsuario );
      const docSnapshot = await getDoc(ref);
      if(docSnapshot.exists()){
        console.log(`correoUsuario`, correoUsuario);
        console.log('docSnapshot.data() :>> ', docSnapshot.data().tareas);
        setTareas(docSnapshot.data().tareas);
      }else{
        console.log("haha")
      }
  }

  // const createData = async (tareas) => {
  //   const ref = doc(db, "tareas", correoUsuario);
  //   console.log("la data se guardo", tareas);
  //   await setDoc(ref, {
  //     tareas: tareas
  //   });
  // };

  //agrega datos a la lista de tareas

  const agregarTareas = async  (e) => {
    e.preventDefault();
    let id = nanoid();
    if (!tarea.trim()) {
      setError("No data");
      return;
    }
     await setTareas([
      ...tareas,
      {
        id: id,
        nameTarea: tarea,
      },
    ]);
     await createData(tareas);
    setError(null);
    setTarea("");
  }; //agregarTareas

  //elimina datos de la lista de tareas
  const handleDeleteTask = (id) => {
    const arrayEliminado = tareas.filter((item) => item.id !== id);
    setTareas(arrayEliminado);
    deleteData(arrayEliminado);
  }; //handleDeleteTask

  //completar tarea
  const completarTarea = async (item) => {
    setTareascompletadas([
      ...tareasCompletadas,
      {
        id: item.id,
        nameTarea: item.nameTarea,
      },
    ]);
  };

  // const handleCompleteAll = () => {
  //   if (tareas.length === 0) {
  //     return;
  //   }

  //   const arrayCompletado = tareas.map((item) => item);

  //   setTareascompletadas([...tareasCompletadas, ...arrayCompletado]);
  //   setTareas([]);
  // };
  //eliminar tarea completada
  const handleDeleteCompleted = (id) => {
    const arrayEliminadoComp = tareasCompletadas.filter(
      (item) => item.id !== id
    );
    setTareascompletadas(arrayEliminadoComp);
  };

  //handleDeleteAll
  // const handleDeleteAll = () => {
  //   setTareas([]);
  //   setTareascompletadas([]);
  // };
  //edita tareas
  const editTask = (item) => {
    setTarea(item.nameTarea);
    setIdEdited(item.id);
    setEditionMode(true);
  };

  const handleEditarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setError("No data");
      return;
    }

    const arrayEditado = tareas.map((item) =>
      item.id === idEdited ? { id: idEdited, nameTarea: tarea } : item
    );
    setTareas(arrayEditado);
    setEditionMode(false);
    setIdEdited(null);
    setTarea("");
  };

  return (
    <div className="container m-5">
      <h1 className="text-center">Crud Simple with ReactJS</h1>
      <h2 className="text-center">List of {correoUsuario}</h2>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <h4 className="text-center">{editionMode ? "Edit" : "Add"}</h4>
          {error ? <span className="text-danger">{error}</span> : null}
          <form
            onSubmit={
              editionMode
                ? (e) => handleEditarTarea(e)
                : (e) => agregarTareas(e)
            }
          >
            <input
              type="text"
              className="form-control mb-2"
              placeholder="add a task"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            {editionMode ? (
              <button className="btn btn-warning btn-block" type="submit">
                Edit
              </button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">
                Add
              </button>
            )}
          </form>
        </div>
       {tareas ? 
       
        <Tareas
          tareas={tareas}
          editTask={editTask}
          editionMode={editionMode}
          completarTarea={completarTarea}
          handleDeleteTask={handleDeleteTask}
        />
        : 
        null
         
       }
        
        <Completed
          tareasCompletadas={tareasCompletadas}
          handleDeleteCompleted={handleDeleteCompleted}
        />
      </div>
    </div>
  );
}
