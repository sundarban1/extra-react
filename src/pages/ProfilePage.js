import React from "react";
import PropTypes from "prop-types";
import Profile from "../components/Profile";
import { getUser } from "../actions/users";
import { connect } from "react-redux";

class ProfilePage extends React.Component {
  // arrow function
  submit = (data) =>
    this.props.getUser(data).then(() => this.props.history.push("/main"));
  // return promise
  // pass history for page component

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <Profile submit={this.submit} />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getUser: PropTypes.func.isRequired,
};

export default connect(null, { getUser })(ProfilePage);
