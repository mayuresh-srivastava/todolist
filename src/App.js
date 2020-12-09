// import logo from './logo.svg';
import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components

import Root from "./Root";
import Navigation from "./Nav";
import Login from './components/auth/Login';
import Admin from './components/admin/Admin';
import Theme from './components/theme';
import Todo from './components/todo';
import Logout from './components/auth/Logout';
import User from './components/user';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }

  handleAuth = () => {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    this.setState({ loggedIn });
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
                <Route path="/admin" component={Admin} />
                <Route path="/theme" component={Theme} />
                <Route path="/todo" component={Todo} />
                <Route path="/users" component={User} />
                <Route path="/logout" component={(props) => (<Logout {...props} handleAuth={this.handleAuth} />)} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
