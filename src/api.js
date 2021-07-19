const API_KEY = `8b78bc96416647348b082041211607`;
const CITY = "Omsk";
const days = 7;

const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;
const API_URL_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=${days}&aqi=no&alerts=no`

const getApiInfo = async() => {
  const response = await fetch(API_URL);
  return await response.json();
}

const getForecastInfo = async() => {
  const response = await fetch(API_URL_FORECAST);
  return await response.json();
}

export { getApiInfo, getForecastInfo };
