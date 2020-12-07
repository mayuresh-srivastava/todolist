import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListArray = (props) => {
  const { list, completeTask, deleteTask } = props
  return (
    list.map((task) => (
      <div className="list" key={task.key}>
        <p>Task: {task.task}, User: {task.user.name}
          <span>
            {
              ((task.isCompleted === false) ?
                <FontAwesomeIcon className="faicons" icon="check-circle" onClick={() => completeTask(task.key)}/> : null)
            }
            <FontAwesomeIcon className="faicons" icon="trash" onClick={() => deleteTask(task.key)}/>
          </span>
        </p>
      </div>
    ))
  );
}

export default ListArray;
