import React from "react";
import "../../../ListItem.css";
// import { Link } from "react-router-dom";

const ItemList = (props) => {
  const { item } = props

  if (item) {
    return (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">
            <h1>{item.title}</h1>
            <img src={item.url} alt="" />
          </span>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default ItemList;
