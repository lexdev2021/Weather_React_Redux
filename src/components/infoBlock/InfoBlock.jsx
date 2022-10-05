import {WeatherNow} from './WeatherNow.jsx'
import {WeatherDetails} from './WeatherDetails.jsx'
import {WeatherForecast} from './WeatherForecast.jsx'
import {Tabs} from './Tabs.jsx'
import {FavCityList} from './FavCityList.jsx'


export function InfoBlock() {
  
  return (
    <div className="info-block">
      <div className="tabs">
        <WeatherNow />
        <WeatherDetails/>
        <WeatherForecast/>
        <Tabs />
      </div>
      <FavCityList/>
    </div>
  )
}


























