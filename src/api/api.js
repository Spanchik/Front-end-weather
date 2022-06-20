import axios from "axios";

export const getWeatherRequest = (city) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
  );
};

export const getWeatherCoordRequest = (lat, lng) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`
  );
};
