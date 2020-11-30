import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

const InputItem = (props) => {
  const { handleInput, currentItem, addItem } = props

  return (
    <header>
      <form id="to-do-form" onSubmit={addItem}>
        <input type="text" placeholder="Enter Text" value={currentItem.text}onChange={handleInput}/>
        <button type="sumbit">Add Item</button>
      </form>
    </header>
  );
}

export default InputItem;
