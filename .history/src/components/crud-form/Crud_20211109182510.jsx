import React, { useState, useEffect, memo } from "react";
import { nanoid } from "nanoid";
import Tareas from "./Tareas";
import Completed from "./Completed";
import {
  getFirestore,
  doc,
  // getDocs,
  getDoc,
  setDoc,
  // addDoc,
  updateDoc,
  // collection,
  // deleteDoc,
} from "firebase/firestore";
import app from "../../firebase/firebase";

const db = getFirestore(app);

export default function Crud({ correoUsuario, deleteData }) {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited] = useState(null);

  // useEffect(()=>{
  //   async function getFetched(){
  //     const data = await searchOr(tareas);
  //     setTareas(data);
  //     }
  //   getFetched();
  // },[]);

  useEffect(() => {
    async function getFetched() {
      const datos = await getDocument();
      console.log(datos);
      setTareas(datos);
    }
    getFetched();
  }, []);

  const createData = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      setError("no data");
      return;
    }
    const nwArray = [
      ...tareas,
      {
        id: nanoid(),
        nameTarea: tarea,
      },
    ];
    const ref = doc(db, `tareas/${correoUsuario}`);

    await updateDoc(ref, {
      tareas: [...nwArray],
    });
    setTareas(nwArray);
    console.log("la data se guardo");
    setTarea("");
    setError("");
  };

  async function getDocument() {
    const ref = doc(db, `tareas/${correoUsuario}`);
    const docSnapshot = await getDoc(ref);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().tareas;
      return data;
    } else {
      await setDoc(ref, {
        tareas: [...tareas],
      });
      console.log("la data se guardo");
    }
  }
  async function getDocumentDone() {
    const ref = doc(db, `completed/${correoUsuario}`);
    const docSnapshot = await getDoc(ref);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().tareas;
      return data;
    } else {
      await setDoc(ref, {
        tareas: [...tareasCompletadas],
      });
      console.log("la data se guardo");
    }
  }

  //agrega datos a la lista de tareas

  //elimina datos de la lista de tareas
  const handleDeleteTask = (id) => {
    const arrayEliminado = tareas.filter((item) => item.id !== id);
    setTareas(arrayEliminado);
    deleteData(arrayEliminado);
  }; //handleDeleteTask

  //completar tarea
  const completarTarea = async (item) => {
    // setTareascompletadas([
    //   ...tareasCompletadas,
    //   {
    //     id: item.id,
    //     nameTarea: item.nameTarea,
    //   },
    // ]);

    const nwArray = [
      ...tareasCompletadas,
      {
        id: item.id,
        nameTarea: item.nameTarea,
      },
    ];
    const ref = doc(db, `completed/${correoUsuario}`);

    await setDoc(ref, {
      tareas: [...nwArray],
    });
    setTareascompletadas(nwArray);
    console.log("la data se guardo");
    handleDeleteTask(item.id);

  };

  //eliminar tarea completada
  const handleDeleteCompleted = (id) => {
    const arrayEliminadoComp = tareasCompletadas.filter(
      (item) => item.id !== id
    );
    setTareascompletadas(arrayEliminadoComp);
  };

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
    deleteData(arrayEditado);
    setEditionMode(false);
    setIdEdited(null);
    setTarea("");
  };

  return (
    <div className="container">
      <h1 className="text-center">Crud Simple with ReactJS</h1>
      <h2 className="text-center">List of {correoUsuario}</h2>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <h4 className="text-center">{editionMode ? "Edit" : "Add"}</h4>
          {error ? <span className="text-danger">{error}</span> : null}
          <form onSubmit={editionMode ? handleEditarTarea : createData}>
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
        {tareas ? (
          <Tareas
            tareas={tareas}
            editTask={editTask}
            editionMode={editionMode}
            completarTarea={completarTarea}
            handleDeleteTask={handleDeleteTask}
          />
        ) : null}

        {tareasCompletadas ? (
          <Completed
            tareasCompletadas={tareasCompletadas}
            handleDeleteCompleted={handleDeleteCompleted}
          />
        ) : null}
      </div>
    </div>
  );
}
