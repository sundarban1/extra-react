import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { styleSheet } from "material-ui/Paper/Paper";
import api from "../api";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    api.user.getHistory().then((res) => {
      this.setState({ data: res.data.data });
    });
  }

  render() {
    return (
      <div style={{ marginInline: "50px", padding: "5px" }}>
        <table>
          <tr
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexGrow: "2",
              width: "200%",
              margin: "0px",
            }}
          >
            <tr
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Sent Amount </th>
              <p>
                <p style={{ marginLeft: "25px" }}>
                  {this.state.data.map(function (item) {
                    <ul>
                      <li>
                        <p>{item.request_amount}</p>;
                      </li>
                    </ul>;
                  })}
                </p>
              </p>
            </tr>
            <hr />

            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Receive Amount: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.receive_amount}
                ramesh
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Request Amount: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.request_amount}
                ramesh
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Sender Id: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.sender_id}
                ramesh
              </p>
            </tr>
            <hr />

            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Receiver Id: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.receiver_id}
                ramesh
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>User Id: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.user_id}
                ramesh
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Top Up Amount: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.topup_amount}
                ramesh
              </p>
            </tr>
          </tr>
        </table>
      </div>
    );
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    getCurrentUser: (currentUser) => {
      dispatch({
        type: "GetCurrentUser",
        payload: currentUser,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(withStyles(styleSheet)(History));
