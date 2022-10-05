import {combineReducers} from 'redux'

import {
  SET_SELECTED_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  SET_WEATHER_DATA,
  SET_WEATHER_DATA_FORECAST,
} from './types.js'

function selectedCity(state = 'Minsk', action) {
  if(action.type === SET_SELECTED_CITY) {
    return action.city;
  }
  return state;
}

function getFavoriteCity(state = [], action) {
  if(action.type === ADD_FAVORITE_CITY) {
    const cityName = state.find(el => el.name === action.city.name);
    return cityName ? state : [...state, action.city];
  } else if(action.type === DELETE_FAVORITE_CITY) {
    return [...state].filter(el => el.name !== action.city.name);
  }
  return state;
}

function getWeatherData(state = {}, action) {
  if(action.type === SET_WEATHER_DATA) {
    return action.data;
  }
  return state;
}
function getWeatherDataForecast(state = {}, action) {
  if(action.type === SET_WEATHER_DATA_FORECAST) {
    return action.data;
  }
  return state;
}



export const rootReducers = combineReducers({
  selectedCity, getFavoriteCity, getWeatherData, getWeatherDataForecast  
})