const CurrentForecast = (data) => {

  // Create dom elements
  const temperature = document.querySelector('.temperature');
  const windkph = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const feelsLike = document.querySelector('.feelsLike');

  // Adding data per elements
  temperature.innerHTML = `${data.current_forecast.temperature}<span class="tempsymbol">°C</span>`;
  windkph.textContent = `Wind: ${data.current_forecast.wind}kph`;
  humidity.textContent = `Humidity: ${data.current_forecast.humidity}%`;
  feelsLike.innerHTML = `Feels Like: ${data.current_forecast.feels_like}<span class="tempsymbol2">°C</span>`;
};

export default CurrentForecast;