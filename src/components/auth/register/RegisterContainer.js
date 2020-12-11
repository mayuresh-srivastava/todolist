import Register from "./RegisterComponent";
import { connect } from "react-redux";
import { nextPage, previousPage } from "../../../redux/register/action";

const mapStateToProps = (state) => {
  const { page } = state.register;
  return {
    page: page
  }
}

const mapDispatchToProps = (dispatch) => ({
  nextPage: (value) => dispatch(nextPage(value)),
  previousPage: (value) => dispatch(previousPage(value))
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;
