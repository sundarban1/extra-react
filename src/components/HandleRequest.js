import { TextField } from "material-ui";
import React from "react";
import "./HandleRequest.css";
import axios from "axios";
import { Button, Select } from "@material-ui/core";

class HandleRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      accept: "",
      decline: "",
      transactionId: "1",
    };
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
    this.setTransactionId = this.setTransactionId.bind(this);
  }

  setTransactionId(e) {
    this.setState({ transactionId: 1 });
  }

  onAccept(e, tid) {
    alert(tid);

    const id = localStorage.getItem("id");
    axios
      .get("/api/users/" + id + "/handleRequest/2?status=accept", {
        headers: {
          //Provided the token from the header.
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.setState({ accept: "" });
        this.setState({ accept: res.data.error });
      });
  }

  onDecline(rid) {
    alert(rid);
    const id = localStorage.getItem("id");
    axios
      .get("/api/users/" + id + "/handleRequest/5?status=cancel", {
        headers: {
          //Provided the token from the header.
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.error);
        this.setState({ decline: res.data.error });
        this.setState({ accept: res.data.error });
      });
  }

  componentDidMount() {
    // alert(this.transactionId);
    //get the user id from the local storage for the user log in.
    const id = localStorage.getItem("id");
    //fetch the user history from the backend for the logged in user.
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
        <div className="menu_item" onClick={this.setTransactionId}>
          {this.state.data.map((value, key) => {
            // this.setState({ transactionId: value.id });
            return (
              <div className="handle__request" value={value.id}>
                <h1>
                  {value.receiver_id} has requested you ${value.amount}.
                </h1>
                <h2>
                  Click "Accept" to send the money, "Decline" to cancel the
                  request.
                </h2>
                <div className="handle__button">
                  <button
                    onClick={(e) => this.onAccept(e, value.id)}
                    className="handle__button__accept"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => this.onDecline(value.id)}
                    className="handle__button__decline"
                  >
                    Decline
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default HandleRequest;
