import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

export const App = () => {
  const [weatherData, setWeatherData] = useState({});

  const handleChangeWeather = (weatherData, city) => {
    setWeatherData({ weather: weatherData, city: city });
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather weatherData={weatherData} />
    </div>
  );
};

export default App;
