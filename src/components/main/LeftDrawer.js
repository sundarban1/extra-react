import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import { ListItemIcon, ListItemText } from 'material-ui/List';
// import DraftsIcon from 'material-ui-icons/Drafts';
// import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
// import DeleteIcon from 'material-ui-icons/Delete';
// import ReportIcon from 'material-ui-icons/Report';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

class LeftDrawer extends Component {
  handleLeftClose = () => {
    this.props.toggleLeftDawerMenu(false);
  }
  render() {
    const classes = this.props.classes;

    const mailFolderListItems = (
      <div>
        <ListItem button>
          <Link to="/main/pg2">PAGE 2</Link>
        </ListItem>
        <ListItem button>
          <Link to="/main/pg3">PAGE 3</Link>
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem> */}
      </div>
    );

    const otherMailFolderListItems = (
      <div>
        {/* <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem> */}
      </div>
    );

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {mailFolderListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {otherMailFolderListItems}
        </List>
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
    structureUI: state.structureUI
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    toggleLeftDawerMenu: (value = false) => {
      dispatch({
        type: "ToggleLeftDawerMenu",
        payload: value
      })
    }
  }
}


export default connect(mapStateToProps, mapDispachToProps)(withStyles(styleSheet)(LeftDrawer));