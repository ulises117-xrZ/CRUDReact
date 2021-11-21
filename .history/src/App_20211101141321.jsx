import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modoEdited, setModoEdited] = useState(false);
  //agrega datos a la lista de tareas
  const handleAddToList = (e) => {

    e.preventDefault();
    if(!task.trim()){
      console.log("no hay ningund dato");
      alert("no hay datos")
      return
    }
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        tarea: task,
      },
    ]);
    setTask("");
    setModoEdited(true);
  };//handleAddToList

  //elimina datos de la lista de tareas
  const handleDeleteTask = (id)=>{
    const arrayFiltrado = tasks.filter(item => item.id !== id );
    setTasks(arrayFiltrado);
  }
  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">{modoEdited? "Lista de tareas" : "No hay tareas"}</h4>
          <ul className="list-group">
            {tasks.map((item) => {
              return (
                <li className="list-group-item">
                  <span className="lead">{item.tarea}</span>
                  <button className="btn btn-sm btn-danger float-right mx-2" onClick = {()=> handleDeleteTask(item.id)}>
                    Eliminar
                  </button>
                  <button className="btn btn-sm btn-warning float-right">
                    Editar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Lista de tareas</h4>
          <form onSubmit>
            {/* <input
              type="text"
              className="form-control mb-2"
              placeholder="edite"
            />
            <button className=" btn btn-warning btn-block">Editar</button> */}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="ingrese la tarea"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button
              className="btn btn-dark btn-block"
              type="submit"
              onClick={(e) => handleAddToList(e)}
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
