import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../actions/users";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const user_id = localStorage.getItem("id");
    this.props.getUser(user_id).then((res) => {
      console.log(res, "ramesh");
    });
    // api.user.getUser().then((res) => {
    //   console.log(res.data.data);
    //   this.setState({ data: res.data.data });
    // });
  }

  render() {
    return (
      <div style={{ marginInline: "50px", padding: "5px" }}>
        <table>
          <tr
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: "2",
              width: "200%",
              margin: "0px",
            }}
          >
            <tr
              style={{
                display: "flex",

                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>First Name: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.first_name}</p>
            </tr>
            <hr />

            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Middle Name: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.middle_name}
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Last Name: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.last_name}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Email: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.email}</p>
            </tr>
            <hr />

            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Address: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.address}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Phone: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.phone}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Date of Birth: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.dob}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Amount: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.amount}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Total Sent: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.total_sent}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Total Receive: </th>
              <p style={{ marginLeft: "25px" }}>
                {this.state.data.total_recieve}
              </p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th>Status: </th>
              <p style={{ marginLeft: "25px" }}>{this.state.data.status}</p>
            </tr>
            <hr />
            <tr
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <th style={{ marginRight: "15px" }}>Photo: </th>
              <img
                alt=""
                src={this.state.data.image_path}
                width="150"
                height="150"
                marginLeft="50px"
              ></img>
            </tr>
          </tr>
        </table>
        <div>
          <Link to="/update">
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                marginLeft: "30px",
                marginTop: "20px",
                marginBottom: "50px",
                width: "20%",
                height: "30px",
              }}
            >
              Update your Profile
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  submit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default connect(null, { getUser })(Profile);
