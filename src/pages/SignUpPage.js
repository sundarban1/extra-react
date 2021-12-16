import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Login from "../components/Login";
import { signup } from "../actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignUpPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/main")); // return promise // pass history for page component

  render() {
    return (
      <div>
        <h1>SignUp Page</h1>
        <Login submit={this.submit} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignUpPage);
