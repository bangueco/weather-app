const searchDOM = (function() {
  const _search_input = document.querySelector('#search_city');
  const search_button = document.querySelector('#search');

  const getSearchInputValue = () => {
    return _search_input.value;
  };

  return {
    search_button,
    getSearchInputValue
  };
})();

const weatherInfoDOM = (function() {
  const displayWeatherData = (data) => {
    // DOM Elements
    const _cityName = document.querySelector('.cityInfo__city-name');
    const _cityCountry = document.querySelector('.cityInfo__country');
    const _cityLocalTime = document.querySelector('.city__local-time');

    const _currentConditionImg = document.querySelector('#current-condition-icon');
    const _currentCondition = document.querySelector('#current-condition');
    const _currentTemperature = document.querySelector('#current-temperature');
    const _currentWind = document.querySelector('#current-wind');
    const _currentWindDirection = document.querySelector('#current-wind-direction');
    const _currentHumidity= document.querySelector('#current-humidity');
    const _currentCloud= document.querySelector('#current-cloud');

    // Displaying their contents after fetching
    _cityName.textContent = data.city_info.city_name;
    _cityCountry.textContent = data.city_info.city_country;
    _cityLocalTime.textContent = data.city_info.city_localtime;

    _currentConditionImg.src = data.current_forecast.condition.icon;
    _currentCondition.textContent = data.current_forecast.condition.condition_status;
    _currentTemperature.textContent = data.current_forecast.temperature;
    _currentWind.textContent = data.current_forecast.wind;
    _currentWindDirection.textContent = data.current_forecast.wind_direction;
    _currentHumidity.textContent = data.current_forecast.humidity;
    _currentCloud.textContent = data.current_forecast.cloud;

    // For next 7 days dom
    const _forecast_container = document.querySelector('.forecast-container');

    if (_forecast_container.children.length > 0) _forecast_container.innerHTML = '';
    
    for(let x = 0; x <= data.forecast.length -1; x++) {
      // Create elements
      const weather_card = document.createElement('div');
      const card_title = document.createElement('h1');
      const condition_container = document.createElement('div');
      const weatherInfo = document.createElement('div');
      const icon = document.createElement('img');
      const condition = document.createElement('span');
      const temperature_container = document.createElement('div');
      const temperatureLabel = document.createElement('p');
      const temperature = document.createElement('span');
      const wind_container = document.createElement('div');
      const windLabel = document.createElement('p');
      const wind = document.createElement('span');
      // const wind_container = document.createElement('div');
      
      // Assigning the right class names
      weather_card.classList.add('weather-card');
      condition_container.classList.add('condition-container');
      weatherInfo.classList.add('weatherInfo');
      
      // Adding data
      card_title.textContent = data.forecast[x].date;
      icon.src = data.forecast[x].condition.icon;
      condition.textContent = data.forecast[x].condition.condition_status;
      temperatureLabel.textContent = 'Temperature';
      temperature.textContent = data.forecast[x].temperature + '\u00B0' + 'c';
      windLabel.textContent = 'Wind';
      wind.textContent = data.forecast[x].wind + 'kph';
      
      // Appending DOMS
      condition_container.appendChild(icon);
      condition_container.appendChild(condition);
      temperature_container.appendChild(temperatureLabel);
      temperature_container.appendChild(temperature);
      wind_container.appendChild(windLabel);
      wind_container.appendChild(wind);
      weatherInfo.appendChild(temperature_container);
      weatherInfo.appendChild(wind_container);
      weather_card.appendChild(card_title);
      weather_card.appendChild(condition_container);
      weather_card.appendChild(weatherInfo);
      _forecast_container.appendChild(weather_card);
    }
  };

  return {
    displayWeatherData
  };
})();

export {searchDOM, weatherInfoDOM};