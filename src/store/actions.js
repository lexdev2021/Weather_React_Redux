import {
  SET_SELECTED_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  SET_WEATHER_DATA,
  SET_WEATHER_DATA_FORECAST
} from './types.js'

import {convertFavCity} from '../components/convert.js'

function setSelectedCity(city) {
  return {
    type: SET_SELECTED_CITY,
    city: city,
  }
}

function addFavoriteCity(city) {
  return {
    type: ADD_FAVORITE_CITY,
    city: convertFavCity(city),
  }
}
function deleteFavoriteCity(city) {
  return {
    type: DELETE_FAVORITE_CITY,
    city: convertFavCity(city),
  }
}

function setWeatherData(data) {
  return {
    type: SET_WEATHER_DATA,
    data: data,
  }
}
function setWeatherDataForecast(data) {
  return {
    type: SET_WEATHER_DATA_FORECAST,
    data: data,
  }
}


export {
  setSelectedCity,
  addFavoriteCity,
  deleteFavoriteCity,
  setWeatherData,
  setWeatherDataForecast, 
}