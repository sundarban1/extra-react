import { TextField } from "material-ui";
import React from "react";
import "./HandleRequest.css";
import axios from "axios";

class HandleRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.accept = this.accept.bind(this);
  }
  accept() {
    alert("ranesg");
  }

  componentDidMount() {
    //get the user id from the local storage for the user log in.
    const id = localStorage.getItem("id");
    //fetch the user history from the bankend for the logged in user.
    axios
      .get("/api/users/" + id + "/requests", {
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
      <div>
        {this.state.data.map(function (value, key) {
          return (
            <div className="handle__request">
              <h1>
                {value.receiver_id} has requested you ${value.amount}.
              </h1>
              <h2>
                Click "Accept" to send the money, "Decline" to cancel the
                request.
              </h2>
              <div className="handle__button">
                <button
                  className="handle__button__accept"
                  onClick={this.accept}
                >
                  Accept
                </button>
                <button className="handle__button__decline">Decline</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default HandleRequest;
