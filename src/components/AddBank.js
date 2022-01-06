import { TextField } from "material-ui";
import React from "react";
import "./AddBank.css";

class AddBank extends React.Component {
  render() {
    return (
      <div className="addBank">
        <h1 className="addBank__header">Add Bank </h1>
        <div className="text__field">
          <TextField
            className="text"
            required
            id="outlined-required"
            label="Bank ID"
          />
          <TextField
            className="text"
            required
            id="outlined-required"
            label="BSB"
          />
          <TextField
            className="text"
            required
            id="outlined-required"
            label="Account Number"
          />
          <TextField
            className="text"
            required
            id="outlined-required"
            label="Balance"
          />
        </div>
        <div className="button"> Add Bank</div>
      </div>
    );
  }
}
export default AddBank;
