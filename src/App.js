import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchData } from "./api/api";
import "./App.css";
import CardsView from "./component/CardsView.component";
import CountryPicker from "./component/CountryPicker.component";
import CustomChart from "./component/CustomChart";

function App() {
  const [dataSet, setDataSet] = useState({});
  const [country, setCountry] = useState();

  const getData = async () => {
    const data = await fetchData();
    setDataSet(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setCountry(country);
    setDataSet(data);
  };

  return (
    <div className="App">
      <h1>COVID19 Tracker</h1>
      <Grid container justify="center">
        <Grid item xs={12} sm={4}>
          <CardsView data={dataSet} mainTitle={country} />
          <CountryPicker handleCountryChange={handleCountryChange} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CustomChart data={dataSet} country={country} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
