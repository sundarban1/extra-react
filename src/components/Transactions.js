import React from "react";
import PropTypes from "prop-types";
// import { withStyles, createStyleSheet } from "material-ui/styles";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import axios from "axios";
import "./Transactions.css";
import "./History.css";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { MenuItem } from "material-ui";

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rid: "",
      amount: "",
      error: "",
      successful: "",
      users: [],
      receiverId: "",
    };

    this.onAmountChange = this.onAmountChange.bind(this);
    this.onTransfer = this.onTransfer.bind(this);
    this.setReceiverID = this.setReceiverID.bind(this);
  }

  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  setReceiverID(e) {
    e.preventDefault();
    this.setState({ receiverId: e.target.value });
  }

  onTransfer() {
    const id = localStorage.getItem("id");
    axios
      .post(
        "/api/users/" + id + "/transaction/" + this.state.receiverId,

        {
          amount: this.state.amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        this.setState({ error: "" });
        this.setState({
          successful: "Your balance is transferred successfully.",
        });
      })
      .catch((err) => {
        this.setState({ successful: "" });
        this.setState({ error: err.response.data.error });
      });
  }
  componentDidMount() {
    axios.get("/api/users").then((res) => {
      this.setState({ users: res.data.data });
    });
  }
  render() {
    return (
      <div>
        <Paper className="transactions">
          {this.state.error ? (
            <span style={{ color: "#ae5856" }}>{this.state.error}</span>
          ) : (
            <span style={{ color: "#ae5856" }}>{this.state.successful}</span>
          )}

          <div>
            <FormControl fullWidth>
              <InputLabel style={{ display: "flex", color: "red" }}>
                Name
              </InputLabel>

              <Select
                className="menu__item"
                label="Phone"
                onClick={this.setReceiverID}
              >
                {this.state.users.map((value, key) => {
                  return (
                    <MenuItem value={value.id} style={{ display: "flex " }}>
                      <p style={{ marginRight: "4px" }}>{value.first_name}</p>
                      <p style={{ marginRight: "7px" }}>{value.last_name}</p>(
                      <p>{value.phone}</p>)
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
            </Grid>

            <Grid container>
              <Grid item xs={8}>
                <Button
                  className="transfer__button"
                  onClick={this.onTransfer}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  Transfer Amount
                </Button>
              </Grid>
            </Grid>
          </div>
          <div>
            <Link to="/main">
              <Button
                className="back__button"
                style={{
                  color: "white",
                  display: "block",
                  backgroundColor: "green",
                }}
              >
                Go Back to main Page
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    );
  }
}

Transactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => {
      dispatch({
        type: "AddCurrentUser",
        payload: currentUser,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Transactions);
