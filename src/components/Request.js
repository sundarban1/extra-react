import { FormControl, InputLabel, Select } from "@material-ui/core";
import { MenuItem, TextField } from "material-ui";
import React from "react";
import "./Request.css";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_id: "",
      amount: "",
      error: "",
      successful: "",
      users: [],
    };
  }

  render() {
    return (
      <div className="request">
        <div className="text__field">
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Name</InputLabel>
              <Select
                className="menu__item"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Phone"
                onClick={this.getUser}
              >
                {this.state.users.map(function (value, key) {
                  return (
                    <MenuItem value={value.phone}>
                      <p style={{ marginRight: "4px" }}>{value.first_name}</p>
                      <p style={{ marginRight: "7px" }}>{value.last_name}</p>(
                      <p>{value.phone}</p>)
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <TextField className="text" fullWidth label="Amount" id="fullWidth" />
          <button className="request__button">Request</button>
        </div>
      </div>
    );
  }
}
export default Request;
