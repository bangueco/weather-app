const CurrentForecast = (data) => {

  // Create dom elements
  const conditionIcon = document.querySelector('.conditionIcon');
  const conditionStatus = document.querySelector('.conditionStatus');
  const temperature = document.querySelector('.temperature');
  const windkph = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const feelsLike = document.querySelector('.feelsLike');

  // Adding data per elements
  temperature.textContent = `${data.current_forecast.temperature} °C`;
  conditionIcon.src = `https:${data.current_forecast.condition.icon}`;
  conditionStatus.textContent = data.current_forecast.condition.condition_status;
  windkph.textContent = `Wind: ${data.current_forecast.wind}kph`;
  humidity.textContent = `Humidity: ${data.current_forecast.humidity}%`;
  feelsLike.textContent = `Feels Like: ${data.current_forecast.feels_like}`;
};

export default CurrentForecast;