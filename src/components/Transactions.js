import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import axios from "axios";
import "./Transactions.css";
import "./History.css";

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_id: "",
      amount: "",
      error: "",
      successful: "",
    };
    this.onBankIdChange = this.onBankIdChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onTransfer = this.onTransfer.bind(this);
  }

  onBankIdChange(event) {
    this.setState({ bank_id: event.target.value });
  }
  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  onTransfer() {
    axios
      .post(
        "/api/users/1/transaction/2",
        {
          bank_id: this.state.bank_id,
          amount: this.state.amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({ error: "" });
        this.setState({
          successful: "Your balance is tranferred successfully.",
        });
        // this.props.history.push("/notification");
      })
      .catch((err) => {
        this.setState({ successful: "" });
        this.setState({ error: err.response.data.error });
      });
  }
  componentDidMount() {
    let userRemembered = JSON.parse(localStorage.getItem("userremember"));
    if (userRemembered) {
      this.props.setCurrentUser(userRemembered);
      this.props.history.push("/main");
    }
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
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bank ID"
                  value={this.state.bank_id}
                  onChange={this.onBankIdChange}
                />
              </Grid>
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
