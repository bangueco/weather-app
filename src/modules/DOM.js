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
  };

  return {
    displayWeatherData
  };
})();

export {searchDOM, weatherInfoDOM};