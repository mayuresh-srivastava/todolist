import { Component } from "react";
import LoginForm from "./viewComponents/LoginForm";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  handleInput = (event) => {
    const input = this.props.input;
    input[event.target.name] = event.target.value;
    this.props.handleInput({ input });
  }

  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (loggedIn) {
      return true;
    }
  }

  handleSubmit = (event) => {
    const username = this.props.input.username
    const password = this.props.input.password
    event.preventDefault();

    if ((username === 'admin') && (password === 'icreon')) {
      localStorage.setItem("isAuthenticated", true);
      this.props.history.push("/admin");
      this.props.handleAuth();
    } else {
      alert('Login not successful');
    }
  }

  render () {
    const isAlereadyAuthenticated = this.isAuthenticated();
    const loginFormProps = {
      credentails: this.props,
      handleInput: this.handleInput,
      handleSubmit: this.handleSubmit
    }

    return (
      <div>
        {
          isAlereadyAuthenticated ? <Redirect to="/admin" /> : (
          <LoginForm loginFormProps={loginFormProps} />
        )}
      </div>
    );
  }
}
