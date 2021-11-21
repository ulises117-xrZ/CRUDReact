import React from "react";

export default function Tareas({
  tareas,
  editionMode,
  handleDeleteTask,
  editTask,
  completarTarea,
}) {
  return (
    <div className="col-sm-12">
      <h4 className="text-center">Tasks</h4>
      <ul className="list-group">
        {tareas?.length === 0 ? (
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
  );
}
