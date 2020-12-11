import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));

  return (
    <nav className="navbar navbar-expand navbar-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Todo App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              {
                loggedIn ?
                <>
                  <li>
                    <Link to="/theme" className="nav-link">Theme</Link>
                  </li>
                  <li>
                    <Link to="/admin" className="nav-link">Admin</Link>
                  </li>
                  <li>
                    <Link to="/todo" className="nav-link">Todo</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link">Logout</Link>
                  </li>
                </> :
                <>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/register" className="nav-link">Register</Link>
                </>
              }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
