import { Component } from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      input: {
        username: "",
        password: ""
      }
    }
  }

  handleInput = (event) => {
    const input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
  }

  validateForm = () => {
    // return email.length > 0 && password.length > 0;
  }

  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (loggedIn) {
      return true;
    }
  }

  handleSubmit = (event) => {
    const username = this.state.input.username
    const password = this.state.input.password
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
      credentails: this.state,
      handleInput: this.handleInput,
      validateForm: this.validateForm,
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
