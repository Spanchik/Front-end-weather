import React, { useState, useEffect } from "react";
import { SearchForm } from "./components/SearchForm";
import { Map } from "./components/Map";
import { Context } from "./components/context";
import { useGeolocation } from "rooks";
import { getWeatherCoordRequest } from "./api/api";
import WeatherCard from "./components/WeatherCard";
function App() {
  const geoObj = useGeolocation();
  const [weatherData, setWeather] = useState({
    coord: { lat: 51.5085, lon: -0.1257 },
    name: "London",
  });
  function setGeoWeather(lat, lng) {
    getWeatherCoordRequest(lat, lng).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    if (geoObj) {
      setGeoWeather(geoObj.lat, geoObj.lng);
    }
  }, [geoObj]);

  return (
    <Context.Provider value={{ setWeather, weatherData }}>
      <main className="main">
        <h1 className="main__title">Weather Map</h1>
        <WeatherCard/>
        <section className="main__inner">
          <SearchForm />
          <Map />
        </section>
      </main>
    </Context.Provider>
  );
}

export default App;
