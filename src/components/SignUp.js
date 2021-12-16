import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import DayPicker from "react-day-picker";
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
      email: "",
      dob: "",
      password: "",
      confirmpassword: "",
      error: "",
      emailerror: "",
      passworderror: "",
      fielderror: "",
      successfulsignup: "",
    };
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }
  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }
  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  onDateOfBirthChange(day, { event }) {
    this.setState({ dob: event ? undefined : day });
  }

  onAddressChange(event) {
    this.setState({ address: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onConfirmPasswordChange(event) {
    this.setState({ confirmpassword: event.target.value });
  }

  onSignUp() {
    if (
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.confirmpassword == "" ||
      this.state.firstname == "" ||
      this.state.lastname == "" ||
      this.state.address == "" ||
      this.state.dob == "" ||
      this.state.phone == ""
    ) {
      this.setState({ fielderror: "Field cannot be empty" });
    } else if (this.state.password != this.state.confirmpassword) {
      this.setState({ passworderror: "Password needs to be same" });
    } else if (!isEmail(this.state.email)) {
      this.setState({ emailerror: "Email is not Valid" });
    } else {
      this.props
        .submit({
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          phone: this.state.phone,
          address: this.state.address,
          dob: this.state.dob,
          email: this.state.email,
          password: this.state.password,
        })
        .catch((err) => {
          let statusCode = err.response.status;
          if (statusCode === 400) {
            this.setState({
              error: err.response.data.details[0].message,
              successfulsignup: "",
            });
          } else if (statusCode === 422) {
            this.setState({
              error: err.response.data.error,
              successfulsignup: "",
            });
          }
        });

      // axios
      //   .post("/api/users", {
      //     first_name: this.state.firstname,
      //     last_name: this.state.lastname,
      //     phone: this.state.phone,
      //     address: this.state.address,
      //     dob: this.state.dob,
      //     email: this.state.email,
      //     password: this.state.password,
      //   })
      //   .then((res) => {
      //     this.setState({
      //       error: "",
      //       successfulsignup:
      //         "Your account is succesfully created, please check your email to varify your account",
      //     });
      //     // console.log(res);
      //     // this.props.setCurrentUser(this.state);
      //     // if (this.state.remember)
      //     //   localStorage.setItem("userremember", JSON.stringify(this.state));
      //     // this.props.history.push("/main");
      //   })
      //   .catch((err) => {
      //     let statusCode = err.response.status;
      //     if (statusCode === 400) {
      //       this.setState({
      //         error: err.response.data.details[0].message,
      //         successfulsignup: "",
      //       });
      //     } else if (statusCode === 422) {
      //       this.setState({
      //         error: err.response.data.error,
      //         successfulsignup: "",
      //       });
      //     }
      //   });
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
        {this.state.successfulsignup && (
          <span style={{ color: "green" }}>{this.state.successfulsignup}</span>
        )}

        <h1> SignUp</h1>

        <div className={this.props.classes.flexGrow}>
          <Grid container>
            <Grid item xs={12}>
              <h5 className="field__name">First Name</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.firstname}
                onChange={this.onFirstNameChange}
              />
            </Grid>

            <Grid item xs={12}>
              <h5 className="field__name">Last Name</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.lastname}
                onChange={this.onLastNameChange}
              />
            </Grid>

            <Grid item xs={12}>
              <h5 className="field__name">Email</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              {this.state.emailerror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.emailerror}
                </span>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <h5 className="field__name">Phone</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.phone}
                onChange={this.onPhoneChange}
              />
            </Grid>
            <Grid item xs={12}>
              <h5 className="field__name">Address</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.address}
                onChange={this.onAddressChange}
              />
            </Grid>
            <Grid class="column" style={{ padding: "20px" }}>
              Date of Birth
            </Grid>
            <Grid class="column">
              <DayPicker
                selectedDays={this.state.dob}
                onDayClick={this.onDateOfBirthChange}
              />
            </Grid>
            <Grid item xs={12}>
              <h5 className="field__name">Password</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <h5 className="field__name">Confirm Password</h5>
              <TextField
                className="text__field"
                fullWidth
                value={this.state.confirmpassword}
                onChange={this.onConfirmPasswordChange}
              />

              {this.state.passworderror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.passworderror}
                </span>
              ) : (
                ""
              )}
            </Grid>

            <div
              style={{
                textAlign: "center",
                display: "flex",
                marginLeft: "250px",
                marginBottom: "-200px",
              }}
            >
              {this.state.fielderror ? (
                <span style={{ color: "#ae5856" }}>
                  {this.state.fielderror}
                </span>
              ) : (
                ""
              )}
            </div>

            <Grid container>
              <Grid item xs={4} className={this.props.classes.button}>
                <Button
                  style={{
                    width: "200%",
                    marginLeft: "120px",
                    marginTop: "50px",
                    padding: "0px",
                    color: "white",
                    display: "block",
                    backgroundColor: "green",
                  }}
                  raised
                  color="primary"
                  onClick={this.onSignUp}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    );
  }
}

SignUp.propTypes = {
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
)(withStyles(styleSheet)(SignUp));
