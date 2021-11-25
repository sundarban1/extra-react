import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import { connect } from "react-redux";
import axios from 'axios';

const styleSheet = createStyleSheet(theme => ({
    root: {
        marginTop: 0,
        width: '100%',
    },
    flexGrow: {
        flexGrow: 0
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        marginTop: 10,
    }
}));

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { remember: false, login: '', pws: '' };
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

      axios.post('/api/auths/login', {
        'email': this.state.login,
        'password': this.state.pws
      })
      .then(res => {
        alert('here');
                this.props.setCurrentUser(this.state);
             if (this.state.remember)
                 localStorage.setItem('userremember', JSON.stringify(this.state));
             this.props.history.push('/main');
      })
      .catch(err=>{
        alert('here');
       console.log(err.response, 'error')
        })

        // if (this.state.login !== '' && this.state.pws !== '') {

        // }
        // IF NOT
        // SHOW MSG
    }
    componentDidMount() {
        let userRemembered = JSON.parse(localStorage.getItem('userremember'));
        if (userRemembered) {
            this.props.setCurrentUser(userRemembered);
            this.props.history.push('/main');
        }
    }
    render() {
        return (
            <Paper className={this.props.classes.paper}>
                <div className={this.props.classes.flexGrow}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Login" value={this.state.login} onChange={this.onLoginChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth type="password" label="Password" value={this.state.pws} onChange={this.onPwsChange} />
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <FormControlLabel
                                    control={<Checkbox onChange={this.onRemember} />}
                                    label="Remember Password"
                                />
                            </Grid>
                            <Grid item xs={4} className={this.props.classes.button}>
                                <Button raised color="primary" onClick={this.onLogin}>Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        setCurrentUser: (currentUser) => {
            dispatch({
                type: "AddCurrentUser",
                payload: currentUser
            })
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styleSheet)(Login));