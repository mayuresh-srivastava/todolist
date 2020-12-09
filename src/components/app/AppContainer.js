import App from "./AppComponent";
import { connect } from "react-redux";
import { handleAuth } from "../../redux/app/action";

const mapStateToProps = (state) => {
  const { loggedIn } = state.app;
  return {
    loggedIn: loggedIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAuth: (value) => dispatch(handleAuth(value))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
