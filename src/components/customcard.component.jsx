import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import CountUp from "countup";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CustomCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Confirmed Cases
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp startsWith={0} endsWith={props.confirmed}>
            {props.confirmed}
          </CountUp>
        </Typography>
        <Typography variant="h5" component="h2">
          Last Updated
        </Typography>
        <Typography variant="h5" component="h2">
          {props.confirmed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
