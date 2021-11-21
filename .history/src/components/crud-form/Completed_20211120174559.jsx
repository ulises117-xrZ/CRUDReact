import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Completed({tareasCompletadas, handleDeleteCompleted}) {
    return (
        <div className="col-sm-12 ">
          <h4 className="text-center">Completed tasks</h4>
          <ul className="list-group">
            {tareasCompletadas?.length === 0 ? (
              <li className="list-group-item">without completed tasks</li>
            ) : (
              tareasCompletadas?.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.nameTarea}</span>
                    <button
                      className="btn btn-danger float-right mx-2"
                      onClick={() => handleDeleteCompleted(item.id)}
                    >
                    <FaTrashAlt />
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
    )
}
