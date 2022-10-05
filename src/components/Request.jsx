export const URL = {
  SERVER: 'http://api.openweathermap.org/data/2.5/weather',
  SERVER_FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
  API_KEY: '876cf39fa6cd1bdda202ce044015d0e5',
}


export function weatherData(city) {
  const url = `${URL.SERVER}?q=${city}&appid=${URL.API_KEY}&units=metric`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      if(res.cod >= 400) {
        alert(res.message);
      } else {
        return (res);
      }
    })
}

export function weatherDataForecast(city) {
  const url = `${URL.SERVER_FORECAST}?q=${city}&appid=${URL.API_KEY}&units=metric`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      if(res.cod >= 400) {
        alert(res.message);
      } else {
        return (res);
      }
    })
}

