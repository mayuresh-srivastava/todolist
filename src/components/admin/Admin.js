import React from "react";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";

const Admin = () => {
  const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));

  return (
    <div>
      {
        loggedIn ? <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> : <Redirect to="/login" />
      }
    </div>
  );
}

export default Admin;
