import React from "react";
import "../../../ListItem.css";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const { list } = props
  return (
    list.map((item) => (
      <div className="post card" key={item.id}>
        <div className="card-content">
          <span className="card-title">
            <b>
              <Link to={`/items/${item.id}`}>{item.title}</Link>
            </b>
          </span>
        </div>
      </div>
    ))
  );
}

export default ItemList;
