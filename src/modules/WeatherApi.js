import { processData } from './Logic';

const API_KEY = 'a75846f36a39400e9d132349240105';

async function getWeatherData(city) {
  try {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=no`, {mode: 'cors'});
    if (!response.ok || response.status !== 200) throw new Error('Failed to fetch data');
    const data = await response.json();
    return processData(data);
  } catch(error) {
    return alert(error);
  }
}

export {
  getWeatherData
};