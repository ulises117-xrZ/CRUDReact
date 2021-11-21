import React from "react";
import { Col } from "react-bootstrap";

export default function Tareas({
  tareas,
  editionMode,
  handleDeleteTask,
  editTask,
  completarTarea,
}) {
  return (
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
                  <Col>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteTask(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => editTask(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => completarTarea(item)}
                    >
                      Complete
                    </button>
                  </Col>
                )}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
