import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddToList = () => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        tarea: task,
      },
    ]);
  };
  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tasks.map((item) => {
              return (
                <li className="list-group-item">
                  <span className="lead">{item.tarea}</span>
                  <button className="btn btn-waning">Editar</button>
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
              onClick={() => handleAddToList()}
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
