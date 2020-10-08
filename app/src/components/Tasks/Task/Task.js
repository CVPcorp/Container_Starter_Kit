import React from 'react';

import './Task.css';

const task = (props) => {
  return (
    <div className="Task">
      <div>
        <h1>{props.task.title}</h1>
        <p>{props.task.description}</p>
      </div>
      <div>
        <select value={props.task.status} onChange={(event) => props.updateTaskStatus(event, props.task.id)}>
            <option>OPEN</option>
            <option>IN_PROGRESS</option>
            <option>DONE</option>
        </select>        
        <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default task;