import React from "react";
import { Toolbar, Typography, AppBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const MyNavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          COVID-19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavBar;
