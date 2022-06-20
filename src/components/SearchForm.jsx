import React, { useContext, useState } from "react";
import { getWeatherRequest } from "../api/api";
import { Context } from "./context";
function SearchForm() {
  const [invalid, setInvalid] = useState(false);
  const { setWeather } = useContext(Context);
  const [city, setCity] = useState("");
  function submit(e) {
    e.preventDefault();
    getWeatherRequest(city)
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
        setInvalid(false);
      })
      .catch((err) => setInvalid(true));
  }
  return (
    <form onSubmit={submit} className="search-form">
      <div className="form-group">
        <div className="form-group__input">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
          {invalid && <p className="error-text">city not found....</p>}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export { SearchForm };
