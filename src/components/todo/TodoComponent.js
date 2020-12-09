import { Component } from "react";
import InputItem from "./viewComponents/Input";
import ListArray from "./viewComponents/ListItem";
import './Todo.css';
import { Redirect } from "react-router-dom";

export default class Todo extends Component {
  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    return (loggedIn ? true : false);
  }

  componentDidMount() {
    const users = localStorage.getItem("users");
    const tasks = localStorage.getItem("tasks");

    if (tasks || users) {
      this.props.setTasks({
        users: JSON.parse(users),
        tasks: JSON.parse(tasks)
      });
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.props.tasks));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.props.tasks));
    localStorage.setItem("users", JSON.stringify(this.props.users));
  }

  handleInput = (event) => {
    const { input } = this.props;
    input[event.target.name] = event.target.value;
    this.props.handleInput({ input });
  }

  addTask = (event) => {
    event.preventDefault();
    const newTask = this.props.input.task;
    const username = this.props.input.username;
    let users = this.props.users

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
      const tasks = [...this.props.tasks, task]
      const users_ids = this.props.users.map(value => value.id);

      if (users_ids.includes(user.id)) {
        users = [...users]
      } else {
        users = [...users, user]
      }

      this.props.addTask({
        tasks: tasks,
        users: users
      });
    } else {
      alert('Please enter a task.');
    }
  }

  completeTask = (key) => {
    const { tasks } = this.props;
    tasks.map((task) => ((task.key === key) ? (task.isCompleted = true) : task))
    this.props.completeTask({ tasks });
  }

  deleteTask = (key) => {
    const filteredTasks = this.props.tasks.filter(task => task.key !== key);
    this.props.deleteTask({
      tasks: filteredTasks
    })
  }

  render() {
    const isAlereadyAuthenticated = this.isAuthenticated();
    const { tasks } = this.props;
    const inputProps = {
      input: this.props.input,
      handleInput: this.handleInput,
      addTask: this.addTask
    }

    return (
      <div>
        {
          !isAlereadyAuthenticated ? <Redirect to="/" /> : (
          <div className="Todo">
            <InputItem inputProps={inputProps} />
            <ListArray list={tasks} completeTask={this.completeTask} deleteTask={this.deleteTask} />
          </div>
        )}
      </div>
    );
  }
}
