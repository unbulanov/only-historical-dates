import React from "react";
import "./assets/styles/style.scss";
import HistoricalDates from "./components/HistoricalDates";
import themes from "./data/themes.json";

const App = () => {
  return (
    <>
      <HistoricalDates className="app__section" themes={themes} />
    </>
  );
};

export default App;