const CityInfo = (data) => {
  const conditionStatus = document.querySelector('.conditionStatus');
  const cityName = document.querySelector('.cityName');

  conditionStatus.textContent = data.current_forecast.condition_status;
  cityName.textContent = `${data.city_info.city_name}, ${data.city_info.city_country}`;
};

export default CityInfo;