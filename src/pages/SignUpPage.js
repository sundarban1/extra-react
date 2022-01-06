import React from "react";
import PropTypes from "prop-types";
import { signup } from "../actions/users";
import { connect } from "react-redux";
import SignUp from "../components/SignUp";

class SignUpPage extends React.Component {
  // arrow function
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/main")); // return promise // pass history for page component

  render() {
    return (
      <div>
      
        <SignUp submit={this.submit} />
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
