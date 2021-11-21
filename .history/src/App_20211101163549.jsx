import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [tareasCompletadas, setTareascompletadas] = useState([]);
  const [editionMode, setEditionMode] = useState(false);
  const [idEdited, setIdEdited]= useState(null);
  //agrega datos a la lista de tareas
const agregarTareas = (e)=>{
  e.preventDefault();
  if(!tarea.trim()){
    setError("Ingrese un valor para agregar la tarea");
    return;
  }
  setTareas([
    ...tareas, {
      id: nanoid(),
      nameTarea: tarea
    }
  ]);
  setError(null);
  setTarea('');
}//agregarTareas

  //elimina datos de la lista de tareas
const handleDeleteTask = id =>{
  const arrayEliminado = tareas.filter(item => item.id !== id);
  setTareas(arrayEliminado);

}//handleDeleteTask

//completar tarea
const completarTarea = item =>{
  setTareascompletadas([
    ...tareasCompletadas, {
      id: item.id,
      nameTarea: item.nameTarea
    }
  ])
  handleDeleteTask(item.id);
}

//eliminar tarea completada
const handleDeleteCompleted = id =>{
  const arrayEliminadoComp = tareasCompletadas.filter(item => item.id !== id);
  setTareascompletadas(arrayEliminadoComp);
}

//handleDeleteAll
const handleDeleteAll = ()=>{
  setTareas([]);
  setTareascompletadas([])
}
  //edita tareas
  const editTask = item =>{
    setTarea(item.tarea);
    setIdEdited(item.id);
  }

  const handleEditarTarea = e =>{
    e.preventDefault();
    setIdEdited(true);
    if(!tarea.trim()){
      setError("Llene el campo editado porfavor");
      return;
    }

    const arrayEditado = tareas.map(item => item.id === idEdited ? {id:idEdited, nameTarea: tarea}: item);
    setTareas(arrayEditado);
    setTarea('');
    setIdEdited('');
    setIdEdited(false);
  }


  return (
    <div className="container m-5">
      <h1 className="text-center">Crud Simple with ReactJS</h1>
      <hr />
      <div className="row">
      <div className="col-12">
          <h4 className="text-center">Formulario</h4>
          {error ? <span className= "text-danger">{error}</span>: null}
          <form onSubmit= { editionMode ? e=> handleEditarTarea(e)  :e => agregarTareas(e)}>
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
          <button className = "btn btn-danger mt-2 mr-5 btn-block col-4" onClick= {(e)=> handleDeleteAll()}> Delete all</button>
          <button className = "btn btn-success mt-2 mb-5 btn-block col-4" onClick= {(e)=> handleDeleteAll()}> Complete all</button>
        </div>
        <div className="col-6">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tareas.length === 0 ? (
              <li className="list-group-item">Sin tareas</li>
            ) : (
              tareas.map((item) => {
                return (
                  <li className="list-group-item" key = {item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    <button className = 'btn btn-danger float-right mx-2' onClick = {()=> handleDeleteTask(item.id)}>Eliminar</button>
                    <button className = 'btn btn-warning  float-right mx-2' onClick={()=> editTask(item)}>Editar</button>
                    <button className = 'btn btn-success  float-right mx-2' onClick ={()=> completarTarea(item)}>Completar</button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className="col-6" >
          <h4 className="text-center">Tareas completadas</h4>
          <ul className="list-group">
            {tareasCompletadas.length === 0 ? (
              <li className="list-group-item">Sin tareas completadas</li>
            ) : (
              tareasCompletadas.map((item) => {
                return (
                  <li className="list-group-item" key = {item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    <button className = 'btn btn-danger float-right mx-2' onClick = {()=> handleDeleteCompleted(item.id)}>Eliminar</button>
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

export default App;
