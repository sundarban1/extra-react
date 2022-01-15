import React from "react";
import PropTypes from "prop-types";
import History from "../components/History";
import { getHistory } from "../actions/users";
import { connect } from "react-redux";

class HistoryPage extends React.Component {
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
        <History submit={this.submit} />
      </div>
    );
  }
}

HistoryPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getHistory: PropTypes.func.isRequired,
};

export default connect(null, { getHistory })(HistoryPage);
