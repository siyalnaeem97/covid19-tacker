import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomCard from "./CustomCard.component";
import "../App.css";

const CardsView = ({
  data: { confirmed, deaths, recovered, lastUpdate },
  mainTitle,
}) => {
  console.log("FROM CARDSVIEW", confirmed);
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="container">
      <Typography variant="h6" component="h2" justify="center">
        {mainTitle ? mainTitle : "Global"} Cases
      </Typography>
      <Typography variant="body2" component="p">
        Last Update: {new Date(lastUpdate).toDateString()}
      </Typography>

      <Grid container spacing={4} justify="center">
        <Grid item xs={10}>
          <CustomCard
            color="red"
            title="Confirmed"
            val={confirmed.value}
            date={lastUpdate}
          />
        </Grid>
        <Grid item xs={10}>
          <CustomCard
            color="green"
            title="Deaths"
            val={deaths.value}
            date={lastUpdate}
          />
        </Grid>

        <Grid item xs={10}>
          <CustomCard
            color="blue"
            title="Recovered"
            val={recovered.value}
            date={lastUpdate}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default CardsView;
