import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../actions/users";
import api from "../api";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const user_id = localStorage.getItem("id");
    // const data = { " user_id": user_id };
    // this.props.submit(data).catch((err) => {
    //   console.log(err);
    // });

    // api.user.getUser(user_id).then((res) => {
    //   console.log(res.data.data);
    //   this.setState({ data: res.data.data });
    // });

    this.props.getUser();

    // axios
    //   .get("/api/users/" + user_id, {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("token"),
    //     },
    //   })
    //   .then((res) => {
    //     this.setState({ data: res.data.data });
    //   });
  }

  render() {
    let user = this.props.users;

    if (user) {
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
                <p style={{ marginLeft: "25px" }}>{user.first_name}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.middle_name}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.last_name}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.email}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.address}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.phone}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.dob}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.amount}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.total_sent}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.total_recieve}</p>
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
                <p style={{ marginLeft: "25px" }}>{user.status}</p>
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
                  src={user.image_path}
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

    return <div>Loading Users</div>;
  }
}

Profile.propTypes = {
  submit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};

export default connect(mapStateToProps, { getUser })(Profile);
