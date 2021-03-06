import axios from 'axios';
import windSpeedFormater from '../../helper/windSpeedFormater';

var location = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    resolve({ lat, lon });
  });
});

const getWeatherData = async () => {
  let { lat, lon } = await location;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_TOKEN}`;
  try {
    let response = await axios({
      url: url,
      method: 'get',
    });

    // Prepare data
    let image = response.data.current.weather[0].icon;
    let fahrenheitTemp =
      (parseFloat(response.data.current.temp) - 273.15) * 1.8 + 32;
    fahrenheitTemp = fahrenheitTemp.toFixed(2);
    let celsiusTemp = parseFloat(response.data.current.temp) - 273.15;
    celsiusTemp = celsiusTemp.toFixed(2);
    let city = response.data.timezone.split('/')[1];
    let wind = windSpeedFormater(
      response.data.current.wind_speed,
      response.data.current.wind_deg
    );

    let result = {
      image: image,
      celsiusTemp: celsiusTemp,
      fahrenheitTemp: fahrenheitTemp,
      city: city,
      wind: wind,
      showCard: true,
    };
    return result;
  } catch (err) {
    console.log(err.message);
    let result = {
      image: '',
      celsiusTemp: '',
      fahrenheitTemp: '',
      city: '',
      wind: '',
      showCard: false,
      err: err.message,
    };
    return result;
  }
};

export default getWeatherData;
