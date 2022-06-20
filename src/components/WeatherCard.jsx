import React, { useContext } from "react";
import { Context } from "./context";
import { mainDef, windDef, weatherDef } from "./wetherDef";

function WeatherCard() {
  const { weatherData } = useContext(Context);
  const {
    name = "-",
    main = mainDef,
    weather = weatherDef,
    wind = windDef,
  } = weatherData;
  return (
    <article className="weather-card">
      <h3 className="weather-card__title">{name}</h3>
      <div className="weather-card__inner">
        <div className="to-day">
          {weather.map((item, index) => (
            <div key={index}>
              <img
                src={"http://openweathermap.org/img/w/" + item.icon + ".png"}
                alt="icon"
              />
              <p>{item.main}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <ul className="list">
          <li>Temp: {main.temp}</li>
          <li>Max: {main.temp_max}</li>
          <li>Min: {main.temp_min}</li>
        </ul>
        <ul className="list">
          <li> Wind </li>
          <li>Deg: {wind.deg}</li>
          <li>Speed: {wind.speed}</li>
        </ul>
      </div>
    </article>
  );
}

export default WeatherCard;
