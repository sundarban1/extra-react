import React from "react";
import PropTypes from "prop-types";
import { getHistory } from "../actions/users";
import { connect } from "react-redux";
import HandleRequest from "../components/HandleRequest";

class HandleRequestPage extends React.Component {
  // arrow function
  submit = (data) =>
    this.props
      .getHistory(data)
      .then(() => this.props.history.push("/main/history"));
  // return promise
  // pass history for page component

  render() {
    return (
      <div>
        <HandleRequest submit={this.submit} />
      </div>
    );
  }
}

HandleRequestPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getHistory: PropTypes.func.isRequired,
};

export default HandleRequestPage;
