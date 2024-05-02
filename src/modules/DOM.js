import CityInfo from './components/CityInfo';
import CurrentForecast from './components/CurrentForecast';

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
    CityInfo(data);
    CurrentForecast(data);
  };

  return {
    displayWeatherData
  };
})();

export {searchDOM, weatherInfoDOM};