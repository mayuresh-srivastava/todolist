import User from "./UserComponent";
import { connect } from "react-redux";
import { setUsers  } from "../../redux/user/action";

const mapStateToProps = (state) => {
  const { users } = state.user;
  return {
    users: users
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUsers: (value) => dispatch(setUsers(value))
});

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
