import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { connect } from "react-redux";


const styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

class TopAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: undefined,
      userMenuopen: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleTopMenu = this.handleTopMenu.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleToggleLeftDawerMenu = this.handleToggleLeftDawerMenu.bind();
  }
  handleLogout() {
    this.props.removeCurrentUser();
    this.props.history.push('/');
  }
  handleTopMenu = event => {
    this.setState({ userMenuopen: true, anchorEl: event.currentTarget });
  }
  handleRequestClose = () => {
    this.setState({ userMenuopen: false });
  }
  handleToggleLeftDawerMenu = ()=>{
    this.props.toggleLeftDawerMenu(true);
  }
  render() {
    return (<div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={this.handleToggleLeftDawerMenu}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={this.props.classes.flex}>
            Application Title
          </Typography>
          <Button
            color="contrast"
            aria-owns={this.state.userMenuopen ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleTopMenu}>
            olá, {this.props.currentUser.login}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.userMenuopen}
            onRequestClose={this.handleRequestClose}>
            <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>)
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user,
    structureUI: state.structureUI
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    removeCurrentUser: () => {
      dispatch({
        type: "RemoveCurrentUser",
        payload: null
      })
    },
    toggleLeftDawerMenu: (value=false) =>{
      dispatch({
        type: "ToggleLeftDawerMenu",
        payload: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styleSheet)(TopAppBar));