import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Tareas from "./Tareas";
import Completed from "./Completed";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";
import app from "../../firebase/firebase";

const firestore = getFirestore(app);

export default function Crud({ correoUsuario }) {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited] = useState(null);

  async function searchDocOrCreate() {
    //crear referencia al documento

    const docRef = doc(firestore, `tareas/${correoUsuario}`, {
      reacciones: [...tareas]
    });
    //buscar documento
    const data = await getDoc(docRef);
    //revisar si existe
    if (data.exists()) {
      //en caso de que si exista
      const infoDoc = data.data();
      return infoDoc.tareas;
    } else {
      //en caso de que no existe
      await setDoc(docRef, { reacciones: [...tareas] });
      const data = await getDoc(docRef);
      const infoDoc = data.data();
      return infoDoc.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const data = await searchDocOrCreate();
      setTareas(data);
    }

    fetchTareas();
  }, []);

  //agrega datos a la lista de tareas

  const agregarTareas = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setError("No data");
      return;
    }
    await setTareas([
      ...tareas,
      {
        id: nanoid(),
        nameTarea: tarea,
      },
    ]);
    setError(null);
    setIdEdited(null);
    setTarea("");
  }; //agregarTareas

  //elimina datos de la lista de tareas
  const handleDeleteTask = (id) => {
    const arrayEliminado = tareas.filter((item) => item.id !== id);
    setTareas(arrayEliminado);
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
     { tareas?
        <Tareas
          tareas={tareas}
          editTask={editTask}
          editionMode={editionMode}
          completarTarea={completarTarea}
          handleDeleteTask={handleDeleteTask}
        /> : null
}
        
        <Completed
          tareasCompletadas={tareasCompletadas}
          handleDeleteCompleted={handleDeleteCompleted}
        />
      </div>
    </div>
  );
}
