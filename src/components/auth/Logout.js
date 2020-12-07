import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  componentDidMount() {
    this.props.handleAuth();
  }

  render () {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));

    if (loggedIn) {
      localStorage.removeItem("isAuthenticated");
    }

    return (
      <div>
        { loggedIn ? <Redirect to="/" /> : <Redirect to="/login" /> }
      </div>
    );
  }
}
