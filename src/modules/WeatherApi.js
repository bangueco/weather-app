import { processData } from './Logic';

const API_KEY = 'e87308b858e24e43ab0135521243001';

async function getWeatherData(city) {
  try {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    if (!response.ok || response.status !== 200) throw new Error('Failed to fetch data');
    return processData(await response.json());
  } catch(error) {
    return alert(error);
  }
}

export {
  getWeatherData
};