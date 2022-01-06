import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHistory } from "../actions/users";
import axios from "axios";
import "./History.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //get the user id from the local storage for the user log in.
    const id = localStorage.getItem("id");
    //fetch the user history from the bankend for the logged in user.
    axios
      .get("/api/users/" + id + "/history", {
        headers: {
          //Provided the token from the header.
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.setState({ data: res.data.data });
      });
  }

  render() {
    return (
      <div className="history">
        <h1 className="history__header">Transaction History</h1>
        <table className="history__table">
          <tr>
            <th className="history__row">ID</th>
            <th className="history__row">Sent Amount</th>
            <th className="history__row">Receive Amount</th>
            <th className="history__row">Request Amount</th>
            <th className="history__row">Date & Time</th>
            <th className="history__row">Sender ID</th>
            <th className="history__row">Receiver ID</th>
            <th className="history__row">TopUp Amount</th>
          </tr>

          {this.state.data.map(function (value, key) {
            return (
              <tr key={key}>
                <td className="row__data">{value.id}</td>
                <td className="row__data" style={{ color: "red" }}>
                  {value.sent_amount}
                </td>
                <td className="row__data" style={{ color: "green" }}>
                  {value.receive_amount}
                </td>
                <td className="row__data">{value.request_amount}</td>
                <td className="row__data">{value.created_at}</td>
                <td className="row__data">{value.sender_id}</td>
                <td className="row__data">{value.user_id}</td>
                <td className="row__data">{value.topup_amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(null, { getHistory })(History);
