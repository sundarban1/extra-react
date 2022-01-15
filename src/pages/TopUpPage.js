import React from "react";
import PropTypes from "prop-types";
import TopUp from "../components/TopUp";

class TopUpPage extends React.Component {
  submit = (data) =>
    this.props.topUp(data).then(() => this.props.history.push("/history"));

  render() {
    return (
      <div>
        <TopUp submit={this.submit} />
      </div>
    );
  }
}

TopUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  topUp: PropTypes.func.isRequired,
};

export default TopUpPage;
