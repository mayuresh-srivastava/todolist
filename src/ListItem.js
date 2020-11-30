import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListArray = (props) => {
  const { list, deleteItem } = props
  return (
    list.map((item) => (
      <div className="list" key={item.key}>
        <p>{item.text}
          <span>
            <FontAwesomeIcon className="faicons" icon="trash" onClick={() => deleteItem(item.key)}/>
          </span>
        </p>
      </div>
    ))
  );
}

export default ListArray;
