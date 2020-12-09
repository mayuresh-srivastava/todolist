import React from "react";
import "../../../ListItem.css";

const UserList = (props) => {
  const { list } = props
  return (
    list.map((user) => (
      <div className="list" key={user.id}>
        <p>ID: {user.id}, Name: {user.name}
        </p>
      </div>
    ))
  );
}

export default UserList;
