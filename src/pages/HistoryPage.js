import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Grid from "material-ui/Grid";
import History from "../components/History";

const styleSheet = createStyleSheet((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
}));

function HistoryPage(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container gutter={24} justify="center">
        <Grid item xs={6}>
          <History history={props.history} />
        </Grid>
      </Grid>
    </div>
  );
}

HistoryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HistoryPage);
