import {useSelector, useDispatch} from 'react-redux'
import logoSearch from '../img/logo-search.svg'
import {weatherData, weatherDataForecast} from './Request.jsx'

import {
  setSelectedCity,
  setWeatherData,
  setWeatherDataForecast
} from '../store/actions.js'

export function FormSearch() {
  const city = useSelector((state) => state.selectedCity);
  const dispatch = useDispatch();
  
  async function handleSubmit(e) {
    e.preventDefault();
    const  data = await weatherData(city);
    await dispatch(setWeatherData(data));
    const dataForecast = await weatherDataForecast(city);
    await dispatch(setWeatherDataForecast(dataForecast));
    e.target.reset();
  }

  function handleChange(e) {
    dispatch(setSelectedCity(e.target.value));
  }

  return (
    <form className="weather__search" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input-search" 
        placeholder="Aktobe"
        onChange={handleChange}
      />
      <button className="btn-search">
        <img src={logoSearch} alt="Search"/>
      </button>
    </form>
  )
}

