import { useSelector, useDispatch } from 'react-redux';
import logoDelete from '../../img/delete-icon.svg'
import {weatherData, weatherDataForecast} from '../Request.jsx'

import {
  deleteFavoriteCity,
  setWeatherData,
  setWeatherDataForecast
} from '../../store/actions.js'


export function FavCityList() {
  const favList = useSelector(state => state.getFavoriteCity);

  return (
    <div className="weather__locations">
      <div className="added-locations">
          <h2>Added Locations:</h2>
      </div>
      <div className="list-locations">
        {favList.map(item => 
          <FavListItem 
            key={item.id}
            name={item.name}
          />
        )}
      </div>
    </div>
  )
}


function FavListItem({name}) {
  const dispatch = useDispatch();

  async function handleClickRender() {
    const  data = await weatherData(name);
    await dispatch(setWeatherData(data));
    const dataForecast = await weatherDataForecast(name);
    await dispatch(setWeatherDataForecast(dataForecast));
  }

  function handleClickDelete() {
    dispatch(deleteFavoriteCity(name));
  }

  return (
    <div className="favorite-city">
      <span className="loc-elem" onClick={handleClickRender}>{name}</span> 
      <button className="btn-delete" onClick={handleClickDelete}> 
        <img src={logoDelete} alt="-"/> 
      </button>
    </div>
  )
}