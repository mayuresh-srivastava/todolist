import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faCheckCircle);

const InputItem = (props) => {
  const { input, handleInput, addTask } = props.inputProps

  return (
    <header>
      <form id="to-do-form" onSubmit={addTask}>
        <input type="text" placeholder="Enter User" name="username" value={input.username} onChange={handleInput} />
        <input type="text" placeholder="Enter Task" name="task" value={input.task}onChange={handleInput} /><br />
        <button type="sumbit">Add Task</button>
      </form>
    </header>
  );
}

export default InputItem;
