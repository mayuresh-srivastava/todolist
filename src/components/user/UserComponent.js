import { Component } from 'react';
import UserList from './viewComponents/UserList';

export default class User extends Component {

  componentDidMount() {
    const users = localStorage.getItem("users");
    if ( users ){
      this.props.setUsers(JSON.parse(users));
    } else {
      localStorage.setItem("users", JSON.stringify(this.props.users));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("users", JSON.stringify(this.props.users));
  }

  render() {
    const { users } = this.props;

    return (
      <div className="Todo">
        <UserList list={users} />
      </div>
    );
  }
}
