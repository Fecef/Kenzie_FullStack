import "./style.css";

const DisplayWeather = ({ weatherData }) => {
  return (
    <div className="display-container">
      <div className="display-city">{weatherData.city}</div>
      <div className="display-temperature">{weatherData.weather}</div>
    </div>
  );
};

export default DisplayWeather;
