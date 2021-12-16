import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
// import Grid from 'material-ui/Grid';
import Login from "../components/Login";
import { login } from "../actions/auth";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  submit = (data) =>
    this.props.login(data).then(() => this.props.history.push("/main")); // return promise // pass history for page component

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Login submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
