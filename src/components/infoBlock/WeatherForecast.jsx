import { useSelector } from 'react-redux';
import {convertTime, convertDate} from './../convert.js'

const URL = {
  ICON_WEATHER: 'https://openweathermap.org/img/wn/',
}

export function WeatherForecast() {
  return (
    <div id="tab_forecast" className="tabs__block block-3">
      <CityName />
      <ForecastList />
    </div>
  )
}

function CityName() {
  const data = useSelector(state => state.getWeatherDataForecast);

  return (
    <div className="forecast-location">
      {data.city && data.city.name}
    </div>
  )
}

function ForecastList() {
  const data = useSelector(state => state.getWeatherDataForecast);

  if(data.list) {
    const arr = data.list.slice(0, 3);

    return (
      <div className="forecast__block-forecasts">
        {arr.map(item => 
          <ForecastListItem 
            key={item.dt}
            date={convertDate(item.dt)}
            temperature={Math.round(item.main.temp) + '°'}
            feelsLike={Math.round(item.main.feels_like) + '°'}
            time={convertTime(item.dt)}
            weather={item.weather[0].main}
            iconWeather={`${URL.ICON_WEATHER}${item.weather[0].icon}@4x.png`}
          />
        )}
      </div>
    )
  } else return null;
}

function ForecastListItem(props) {
  const {date, temperature, feelsLike, time, weather, iconWeather} = props;
  return (
    <div className="forecast-block">
      <div className="block-left">
          <div className="block-date date-block-0">{date}</div>
          <div className="block-temperature temp-block-0">Temperature: {temperature}</div>
          <div className="block-feelslike feelslike-block-0">Feels like: {feelsLike}</div>
      </div>
      <div className="block-right">
          <div className="block-time time-block-0">{time}</div>
          <div className="block-weather weather-block-0">{weather}</div>
          <div className="block-icon">
            <img className="icon-weather-forecast icon-block-0" src={iconWeather} alt="Weather"/>
          </div>
      </div>
    </div>
  )
}