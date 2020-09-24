import {
  Card,
  CardContent,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import cx from "classnames";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  red: {
    border: "2px solid red",
  },
  green: {
    border: "2px solid green",
  },
  blue: {
    border: "2px solid blue",
  },
  black: {
    color: "black",
    fontWeight: "bold",
  },
});

const CustomCard = ({ title, val, color }) => {
  const classes = useStyles();

  let borderColorClass;

  if (color === "red") {
    borderColorClass = classes.red;
  } else if (color === "green") {
    borderColorClass = classes.green;
  } else {
    borderColorClass = classes.blue;
  }

  return (
    <Paper elevation={3} className={borderColorClass}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={cx(classes.title, classes.black)} gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <CountUp start={0} end={val} duration={2.75} separator="," />
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
export default CustomCard;
