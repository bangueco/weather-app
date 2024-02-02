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
      wind: data.current.wind_kph,
      wind_direction: data.current.wind_dir,
      humidity: data.current.humidity,
      cloud: data.current.cloud
    },
    forecast: [
      {
        date: data.forecast.forecastday[1].date,
        condition: {
          icon: data.forecast.forecastday[1].day.condition.icon,
          condition_status: data.forecast.forecastday[1].day.condition.text,
        },
        temperature: data.forecast.forecastday[1].day.maxtemp_c,
        wind: data.forecast.forecastday[1].day.maxwind_kph,
      },
      {
        date: data.forecast.forecastday[2].date,
        condition: {
          icon: data.forecast.forecastday[2].day.condition.icon,
          condition_status: data.forecast.forecastday[2].day.condition.text,
        },
        temperature: data.forecast.forecastday[2].day.maxtemp_c,
        wind: data.forecast.forecastday[2].day.maxwind_kph,
      },
      {
        date: data.forecast.forecastday[3].date,
        condition: {
          icon: data.forecast.forecastday[3].day.condition.icon,
          condition_status: data.forecast.forecastday[3].day.condition.text,
        },
        temperature: data.forecast.forecastday[3].day.maxtemp_c,
        wind: data.forecast.forecastday[3].day.maxwind_kph,
      },
      {
        date: data.forecast.forecastday[4].date,
        condition: {
          icon: data.forecast.forecastday[4].day.condition.icon,
          condition_status: data.forecast.forecastday[4].day.condition.text,
        },
        temperature: data.forecast.forecastday[4].day.maxtemp_c,
        wind: data.forecast.forecastday[4].day.maxwind_kph,
      },
      {
        date: data.forecast.forecastday[5].date,
        condition: {
          icon: data.forecast.forecastday[5].day.condition.icon,
          condition_status: data.forecast.forecastday[5].day.condition.text,
        },
        temperature: data.forecast.forecastday[5].day.maxtemp_c,
        wind: data.forecast.forecastday[5].day.maxwind_kph,
      },
      {
        date: data.forecast.forecastday[6].date,
        condition: {
          icon: data.forecast.forecastday[6].day.condition.icon,
          condition_status: data.forecast.forecastday[6].day.condition.text,
        },
        temperature: data.forecast.forecastday[6].day.maxtemp_c,
        wind: data.forecast.forecastday[6].day.maxwind_kph,
      },
    ]
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