import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { collection, getDocs } from "firebase/firestore";

export default function Crud({
  addOrEdit,
  editData,
  borrarDatos,
  db,
  nombreUsuario,
}) {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited] = useState(null);
  const array = [];
  const arrayCompleted = [];



  useEffect(() => {
    async function getTareas(coleccion, array, setter) {
      const ref = collection(db, coleccion);
      const snapshot = await getDocs(ref);
       snapshot.forEach( async ele =>{
         await array.push({ id: ele.id, nameTarea: ele.data().nameTarea });
        setter(array);
      })
    }
    getTareas("tareas", array,setTareas);
    getTareas("completed", arrayCompleted,setTareascompletadas);
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
    setIdEdited(nanoid());
    setTarea("");
  }; //agregarTareas

  //elimina datos de la lista de tareas
  const handleDeleteTask = (id) => {
    borrarDatos(id, "tareas");
    const arrayEliminado = tareas.filter((item) => item.id !== id);
    setTareas(arrayEliminado);
  }; //handleDeleteTask

  //completar tarea
  const completarTarea = async (item) => {
    const data =await borrarDatos(item.id,"tareas");
    console.log(data);
    addOrEdit(item.nameTarea, item.id);
     setTareascompletadas([
      ...tareasCompletadas,
      {
        id: item.id,
        nameTarea: item.nameTarea,
      },
    ]);
    setTareas(array);
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
    borrarDatos(id, "completed");
    setTareascompletadas(arrayEliminadoComp);
  };

  //handleDeleteAll
  // const handleDeleteAll = () => {
  //   setTareas([]);
  //   setTareascompletadas([]);
  // };
  //edita tareas
  const editTask = (item) => {
    console.log(item);
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
    editData(tarea, idEdited);
    setTareas(arrayEditado);
    setEditionMode(false);
    setIdEdited(nanoid());
    setTarea("");
  };

  return (
    <div className="container m-5">
      <h1 className="text-center">Crud Simple with ReactJS</h1>
      <h2 className="text-center">List of {nombreUsuario}</h2>
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

          {/* {editionMode ? null : (
            <>
              <button
                className="btn btn-danger mt-2 mr-5 btn-block col-4"
                onClick={(e) => handleDeleteAll()}
              >
                Delete all
              </button>
              <button
                className="btn btn-success mt-2 mb-5 btn-block col-4"
                onClick={(e) => handleCompleteAll()}
              >
                Complete all
              </button>
            </>
          )} */}
        </div>
        <div className="col-sm-6">
          <h4 className="text-center">Tasks</h4>
          <ul className="list-group">
            {tareas.length === 0 ? (
              <li className="list-group-item">Without tasks</li>
            ) : (
              tareas.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    {editionMode ? null : (
                      <>
                        <button
                          className="btn btn-danger float-right mx-2"
                          onClick={() => handleDeleteTask(item.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning  float-right mx-2"
                          onClick={() => editTask(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-success  float-right mx-2"
                          onClick={() => completarTarea(item)}
                        >
                          Complete
                        </button>
                      </>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className="col-sm-6 ">
          <h4 className="text-center">Completed tasks</h4>
          <ul className="list-group">
            {tareasCompletadas.length === 0 ? (
              <li className="list-group-item">without completed tasks</li>
            ) : (
              tareasCompletadas.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    <button
                      className="btn btn-danger float-right mx-2"
                      onClick={() => handleDeleteCompleted(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
