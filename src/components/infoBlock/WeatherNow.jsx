import { useSelector, useDispatch } from 'react-redux';
import logoFavour from '../../img/icon-favour.svg'
import {addFavoriteCity} from '../../store/actions.js'

const URL = {
  ICON_WEATHER: 'https://openweathermap.org/img/wn/',
}

export function WeatherNow() {
  const data = useSelector(state => state.getWeatherData);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addFavoriteCity(data.name));
  }

  if(data.name) {
    const iconWeather = `${URL.ICON_WEATHER}${data.weather[0].icon}@4x.png`;
  
    return (
      <div id="tab_now" className="tabs__block block-1">
        <p className="temperature">{Math.round(data.main.temp)}°</p>
        <div className="icon-weather">
          <img src={iconWeather} alt="Weather" className="icon-weather-img"/>
        </div>

        <div className="now-bottom">
        <h2 className="now-location">{data.name}</h2>
            <button className="btn-favour" onClick={handleClick}>
                <img className="icon-favour" src={logoFavour} alt="Favorites"/>
            </button>
        </div>
      </div>
  )
  } else return;
  
}


