import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/users">
        User
      </a>
      <a className="menu-item" href="/posts">
        Post
      </a>
    </Menu>
  );
}

export default Sidebar;
