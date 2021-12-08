import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: "initial",
  },
  listFull: {
    width: "auto",
    flex: "initial",
  },
});

class LeftDrawer extends Component {
  handleLeftClose = () => {
    this.props.toggleLeftDawerMenu(false);
  };
  render() {
    const classes = this.props.classes;

    const mailFolderListItems = (
      <div>
        <ListItem button>
          <Link to="/main/transactions">Transactions</Link>
        </ListItem>
        <ListItem button>
          <Link to="/main/history">History</Link>
        </ListItem>
      </div>
    );

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {mailFolderListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding></List>
      </div>
    );

    return (
      <div>
        <Drawer
          open={this.props.structureUI.leftDawerOpen}
          onRequestClose={this.handleLeftClose}
          //onClick={this.handleLeftClose}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    structureUI: state.structureUI,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    toggleLeftDawerMenu: (value = false) => {
      dispatch({
        type: "ToggleLeftDawerMenu",
        payload: value,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(withStyles(styleSheet)(LeftDrawer));
