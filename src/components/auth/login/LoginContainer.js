import Login from "./LoginComponent";
import { connect } from "react-redux";
import { handleInput, handleSubmit } from "../../../redux/login/action";

const mapStateToProps = (state) => {
  const { input } = state.login;
  return {
    input: input
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInput: (value) => dispatch(handleInput(value)),
  handleSubmit: (value) => dispatch(handleSubmit(value))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
