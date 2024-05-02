import {format} from 'date-fns';

const CityInfo = (data) => {
  const cityName = document.querySelector('.cityName');
  const cityLocalTime = document.querySelector('.cityLocalTime');

  cityName.textContent = `${data.city_info.city_name}, ${data.city_info.city_country}`;
  cityLocalTime.textContent = format(data.city_info.city_localtime, 'MM/dd/yyyy, hh:mm a');
};

export default CityInfo;