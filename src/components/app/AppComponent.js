// import logo from './logo.svg';
import { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import Root from "../../Root";
import Navigation from "../../Nav";
import Login from "../auth/login";
import Register from "../auth/register";
import Admin from "../admin/Admin";
import Theme from "../theme";
import Todo from "../todo";
import Logout from "../auth/Logout";
import User from "../user";
import Post from "../post";

export default class App extends Component {
  handleAuth = () => {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    this.props.handleAuth(loggedIn);
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/login" component={(props) => (<Login {...props} handleAuth={this.handleAuth} />)} />
                <Route path="/register" component={Register} />
                <Route path="/admin" component={Admin} />
                <Route path="/theme" component={Theme} />
                <Route path="/todo" component={Todo} />
                <Route path="/users" component={User} />
                <Route path="/posts" component={Post} />
                <Route path="/logout" component={(props) => (<Logout {...props} handleAuth={this.handleAuth} />)} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
