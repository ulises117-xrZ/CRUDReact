import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Tareas from "./Tareas";
import Completed from "./Completed";
import {
  getFirestore,
  doc,

  getDoc,
  setDoc,
  updateDoc,

} from "firebase/firestore";
import app from "../../firebase/firebase";
import { useAuth } from "../../Context/authProvider";

const db = getFirestore(app);

export default function Crud({ deleteData }) {
  const authContext = useAuth();

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited] = useState(null);

  useEffect(() => {

    async function getFetched() {
      const datos = await getDocument();
      if(datos === undefined){
        setTareas[];
        console.log("hello");
      } 
        setTareas(datos);
 

      const datosComp = await getDocumentDone();
      if(datosComp === undefined){
        setTareascompletadas([]);
      }else{
        setTareascompletadas(datosComp);
      }

    }
    getFetched();
  }, []);

  const createData = async (e) => {
    console.log(authContext.user.email);
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
    const ref = doc(db, `tareas/${authContext.user.email}`);

    await setDoc(ref, {
      tareas: [...nwArray],
    });
    setTareas(nwArray);
    setTarea("");
    setError("");
  };

  async function getDocument() {
    const ref = doc(db, `tareas/${authContext.user.email}`);
    const docSnapshot = await getDoc(ref);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().tareas;
      return data;
    } else {
      await setDoc(ref, {
        tareas: [...tareas],
      });
    }
  }
  async function getDocumentDone() {
    const ref = doc(db, `completed/${authContext.user.email}`);
    const docSnapshot = await getDoc(ref);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().tareas;
      return data;
    } else {
      await setDoc(ref, {
        tareas: [...tareasCompletadas],
      });
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
    const nwArray = [
      ...tareasCompletadas,
      {
        id: item.id,
        nameTarea: item.nameTarea,
      },
    ];
    const ref = doc(db, `completed/${authContext.user.email}`);

    await setDoc(ref, {
      tareas: [...nwArray],
    });
    setTareascompletadas(nwArray);
    handleDeleteTask(item.id);
  };

  //eliminar tarea completada
  const handleDeleteCompleted = async (id) => {
    const arrayEliminadoComp = tareasCompletadas.filter(
      (item) => item.id !== id
    );
    const ref = doc(db, "completed", authContext.user.email);
    await updateDoc(ref, {
      tareas: [...arrayEliminadoComp],
    });

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
        {/* {
            tareas ?  */}
        <Tareas
          tareas={tareas}
          editTask={editTask}
          editionMode={editionMode}
          completarTarea={completarTarea}
          handleDeleteTask={handleDeleteTask}
        />

        <Completed
          tareasCompletadas={tareasCompletadas}
          handleDeleteCompleted={handleDeleteCompleted}
        />
      </div>
    </div>
  );
}
