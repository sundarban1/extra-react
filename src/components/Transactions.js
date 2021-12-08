import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
// import Checkbox from "material-ui/Checkbox";
// import { FormControlLabel } from "material-ui/Form";
import { connect } from "react-redux";
import axios from "axios";
// import isEmail from "validator/lib/isEmail";

import "react-day-picker/lib/style.css";

const styleSheet = createStyleSheet((theme) => ({
  root: {
    marginTop: 0,
    width: "100%",
  },
  flexGrow: {
    flexGrow: 0,
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: 10,
  },
}));

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
    this.onLogin = this.onLogin.bind(this);
  }

  onBankIdChange(event) {
    this.setState({ bank_id: event.target.value });
  }
  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  onLogin() {
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
      <Paper className={this.props.classes.paper}>
        {this.state.error ? (
          <span style={{ color: "#ae5856" }}>{this.state.error}</span>
        ) : (
          <span style={{ color: "#ae5856" }}>{this.state.successful}</span>
        )}
        <div className={this.props.classes.flexGrow}>
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
              <Grid item xs={4} className={this.props.classes.button}>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginLeft: "150px",

                    marginTop: "50px",
                    padding: "10px",
                    color: "white",
                    backgroundColor: "blue",
                  }}
                  raised
                  color="primary"
                  onClick={this.onLogin}
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
              style={{
                width: "70%",
                marginLeft: "80px",
                marginTop: "50px",
                padding: "10px",
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

export default connect(
  mapStateToProps,
  mapDispachToProps
)(withStyles(styleSheet)(Transactions));
