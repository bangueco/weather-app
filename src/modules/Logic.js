import { getWeatherData } from './WeatherApi';
import { weatherInfoDOM } from './DOM';

function processData(data) {
  console.log(data);
  const cityProcessedData = {
    city_info: {
      city_name: data.location.name,
      city_country: data.location.country,
      city_localtime: data.location.localtime,
    },
    current_forecast: {
      condition: {
        icon: data.current.condition.icon,
        condition_status: data.current.condition.text
      },
      temperature: data.current.temp_c,
      feels_like: data.current.feelslike_c,
      humidity: data.current.humidity,
      wind: data.current.wind_kph
    }
  };

  return cityProcessedData;
}

function searchCity(search_input) {
  getWeatherData(search_input).then(data => {
    if (data === undefined) throw new Error('City not found');
    weatherInfoDOM.displayWeatherData(data);
  }).catch(error => alert(error));
}

export {
  processData,
  searchCity
};