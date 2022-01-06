import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import axios from "axios";
import "./Transactions.css";
import "./TopUp.css";

class TopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_id: "",
      balance: "",
      error: "",
      successful: "",
    };
    this.onBankIdChange = this.onBankIdChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onTopUp = this.onTopUp.bind(this);
  }

  onBankIdChange(event) {
    this.setState({ bank_id: event.target.value });
  }
  onAmountChange(event) {
    this.setState({ balance: event.target.value });
  }
  onTopUp() {
    const id = localStorage.getItem("id");

    axios
      .post(
        "/api/users/" + id + "/topUp",
        {
          bank_id: this.state.bank_id,
          balance: this.state.balance,
        },

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res, "res");
        this.setState({ error: "" });
        this.setState({
          successful: "Top Up is successful.",
        });
      })
      .catch((err) => {
        console.log("err", err);
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
      <div className="topUp">
        <Paper className="transactions">
          {this.state.error ? (
            <span style={{ color: "#ae5856" }}>{this.state.error}</span>
          ) : (
            <span style={{ color: "#ae5856" }}>{this.state.successful}</span>
          )}

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
                  onClick={this.onTopUp}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  Top UP
                </Button>
              </Grid>
            </Grid>
            <Link to="/main">
              <div className="go__back">
                <Button style={{ backgroundColor: "green", width: "300%" }}>
                  Go Back to main Page
                </Button>
              </div>
            </Link>
          </Grid>
        </Paper>
      </div>
    );
  }
}

TopUp.propTypes = {
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

export default connect(mapStateToProps, mapDispachToProps)(TopUp);
