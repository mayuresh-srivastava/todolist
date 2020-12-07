import { Component } from 'react';
import UserList from './UserList';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const users = localStorage.getItem("users");
    if ( users ){
      this.setState({ users: JSON.parse(users) });
    } else {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("users", JSON.stringify(this.state.users));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="Todo">
        <UserList list={users} />
      </div>
    );
  }
}
