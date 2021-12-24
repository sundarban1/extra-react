import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHistory } from "../actions/users";
import axios from "axios";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("id");
    // this.props.getHistory(user_id).then((res) => {
    //   console.log(res, "ramesh");
    // });
    axios

      .get("/api/users/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => res.data);
  }

  render() {
    return (
      <div style={{ marginInline: "50px", padding: "5px" }}>
        <h1 style={{ textAlign: "center", width: "100%", marginLeft: "300px" }}>
          Transaction History
        </h1>

        {/* <div key={this.state.item}>{this.state.data.map((item) => item)}</div> */}

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
                borderRight: "block",
              }}
            >
              <th>Date </th>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
              <p>{Date().toLocaleString()}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <th>Sent Amount </th>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
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
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
              <p>ramesh</p>
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
export default connect(null, { getHistory })(History);
