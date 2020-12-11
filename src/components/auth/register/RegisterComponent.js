import { Component } from "react";
import { Redirect } from "react-router-dom";
import WizardForm from "./viewComponents/WizardForm";
// import { Values } from "redux-form-website-template";

export default class Login extends Component {
  isAuthenticated() {
    const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (loggedIn) {
      return true;
    }
  }

  nextPage = () => {
    this.props.nextPage(this.props.page + 1);
  }

  previousPage = () => {
    this.props.previousPage(this.props.page - 1);
  }

  render () {
    const isAlereadyAuthenticated = this.isAuthenticated();
    const { page } = this.props;
    const { onSubmit } = this.props;

    const wizardFormProps = {
      page: page,
      nextPage: this.nextPage,
      previousPage: this.previousPage,
      onSubmit: onSubmit
    }

    return (
      <>
        {
          isAlereadyAuthenticated ? <Redirect to="/admin" /> : (
            <div style={{ padding: 15 }}>
              <WizardForm wizardFormProps={wizardFormProps} />
              {/*<Values form="wizard" />*/}
            </div>
        )}
      </>
    );
  }
}
