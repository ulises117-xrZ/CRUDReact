import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [tarea, setTarea] =useState("");


  //agrega datos a la lista de tareas

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
           
              <li className="list-group-item">Sin tareas</li>
         
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            </h4>
          <form >
            <input
              type="text"
              className="form-control mb-2"
              placeholder="agrega tarea"
              onClick= {(e)=> setTarea(e.target.value)}
              value = {tarea}
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
