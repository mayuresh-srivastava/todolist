import { Component } from "react";
import InputItem from "./Input";
import ListArray from "./ListItem";
import './Todo.css';
import { Redirect } from "react-router-dom";
// import Login from "./components/auth/Login"

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        username: '',
        task: ''
      },
      users: [],
      tasks: []
    }
  }

  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    return (loggedIn ? true : false);
  }

  componentDidMount() {
    const users = localStorage.getItem("users");
    const tasks = localStorage.getItem("tasks");

    if (tasks || users) {
      this.setState({
        users: JSON.parse(users),
        tasks: JSON.parse(tasks)
      });
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("users", JSON.stringify(this.state.users));
  }

  handleInput = (event) => {
    const input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({ input });
  }

  addTask = (event) => {
    event.preventDefault();
    const newTask = this.state.input.task;
    const username = this.state.input.username;
    let users = this.state.users

    const user = {
      id: Math.random().toString(36).substr(2, 9),
      name: username
    }

    const task = {
      task: newTask,
      isCompleted: false,
      key: Date.now(),
      user: user
    }

    if (newTask !== "") {
      const tasks = [...this.state.tasks, task]
      const users_ids = this.state.users.map(value => value.id);

      if (users_ids.includes(user.id)) {
        users = [...users, user]
      } else {
        users = [...users]
      }

      this.setState({
        tasks: tasks,
        users: users
      });
    } else {
      alert('Please enter a task.');
    }
  }

  completeTask = (key) => {
    const tasks = this.state.tasks;
    tasks.map((task) => ((task.key === key) ? (task.isCompleted = true) : task))
    this.setState({ tasks })
  }

  deleteTask = (key) => {
    const filteredTasks = this.state.tasks.filter(task => task.key !== key);
    this.setState({
      tasks: filteredTasks
    })
  }

  render() {
    const isAlereadyAuthenticated = this.isAuthenticated();
    const tasks = this.state.tasks;
    const inputProps = {
      input: this.state.input,
      handleInput: this.handleInput,
      addTask: this.addTask
    }

    return (
      <div>
        {
          !isAlereadyAuthenticated ? <Redirect to={"/"} /> : (
          <div className="Todo">
            {/* <div>{this.state.name}</div><br /> */}
            <InputItem inputProps={inputProps} />
            <ListArray list={tasks} completeTask={this.completeTask} deleteTask={this.deleteTask} />
          </div>
        )}
      </div>
    );
  }
}
