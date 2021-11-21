import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  //agrega datos a la lista de tareas
const agregarTareas = (e)=>{
  e.preventDefault();
  setTareas([
    ...tareas, {
      id: nanoid(),
      nameTarea: tarea
    }
  ]);

}
  //handleAddToList

  //elimina datos de la lista de tareas

  //handleDeleteTask

  //edita tareas

  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tareas.length === 0 ? (
              <li className="list-group-item">Sin tareas</li>
            ) : (
              tareas.map((item) => {
                return (
                  <li className="list-group-item" key = {item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    <button className = 'btn btn-danger float-right mx-2'>Eliminar</button>
                    <button className = 'btn btn-warning  float-right mx-2'>Editar</button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit= {e => agregarTareas(e)}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="agrega tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />

            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
