import { TextField } from "material-ui";
import React from "react";
import "./Request.css";

class Request extends React.Component {
  render() {
    return (
      <div className="request">
        <div className="text__field">
          <TextField
            className="text"
            fullWidth
            label="Sender Id"
            id="fullWidth"
          />
          <TextField className="text" fullWidth label="Amount" id="fullWidth" />
          <button className="request__button">Request</button>
        </div>
      </div>
    );
  }
}
export default Request;
