import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Checkbox from "material-ui/Checkbox";
import { FormControlLabel } from "material-ui/Form";
import { connect } from "react-redux";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import DayPickerInput from "react-day-picker/DayPickerInput";
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: false,
      login: "",
      pws: "",
      error: "",
      loginerror: "",
      passworderror: "",
    };
    this.onRemember = this.onRemember.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPwsChange = this.onPwsChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onRemember(event) {
    this.setState({ remember: !this.state.remember });
  }
  onLoginChange(event) {
    this.setState({ login: event.target.value });
  }
  onPwsChange(event) {
    this.setState({ pws: event.target.value });
  }
  onLogin() {
    if (!isEmail(this.state.login)) {
      this.setState({ loginerror: "Email is not Valid" });
    } else if (this.state.pws == "") {
      this.setState({ passworderror: "password cannot be empty" });
    } else {
      axios
        .post("/api/auths/login", {
          email: this.state.login,
          password: this.state.pws,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          this.props.setCurrentUser(this.state);
          if (this.state.remember)
            localStorage.setItem("userremember", JSON.stringify(this.state));
          this.props.history.push("/main");
        })
        .catch((err) => {
          this.setState({ error: err.response.data.message });
        });
    }
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
          ""
        )}
        <div className={this.props.classes.flexGrow}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={this.state.login}
                onChange={this.onLoginChange}
              />
              {this.state.loginerror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.loginerror}
                </span>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                value={this.state.pws}
                onChange={this.onPwsChange}
              />
              {this.state.passworderror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.passworderror}
                </span>
              ) : (
                ""
              )}
            </Grid>

            <Grid item xs={12}>
              {this.state.passworderror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.passworderror}
                </span>
              ) : (
                ""
              )}
            </Grid>
            <Grid container>
              <Grid item xs={8}>
                <FormControlLabel
                  control={<Checkbox onChange={this.onRemember} />}
                  label="Remember Password"
                />
              </Grid>
              <Grid item xs={4} className={this.props.classes.button}>
                <Button
                  style={{
                    width: "100%",
                    marginLeft: "-280px",
                    marginTop: "50px",
                    padding: "10px",
                    color: "white",
                    display: "block",
                    backgroundColor: "blue",
                  }}
                  raised
                  color="primary"
                  onClick={this.onLogin}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Link to="/signup">
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
              Create new Account
            </Button>
          </Link>
        </div>
      </Paper>
    );
  }
}

Login.propTypes = {
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
)(withStyles(styleSheet)(Login));
