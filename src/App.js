import React from "react";
import "./App.css";
import Cards from "./components/cards.component";
import CountryPicker from "./components/countryPicker.component";
import MyNavBar from "./components/navBar.component";
import MyChart from "./components/mychart.component";
import { GetCases } from "./api/index";

function App() {
  GetCases();
  return (
    <div className="App">
      <MyNavBar />
      <Cards />
      <CountryPicker />
      <MyChart />
    </div>
  );
}

export default App;
