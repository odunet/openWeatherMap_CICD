import { store } from '../store';
import { types } from '../types';

export default function reducer(state, action) {
  switch (action.type) {
    case types.Change_Title:
      return {
        title: action.data,
        weather: state.weather,
        isCelsius: state.isCelsius,
        showWind: state.showWind,
      };
    case types.Change_Units:
      return {
        title: state.title,
        weather: state.weather,
        isCelsius: action.data,
        showWind: state.showWind,
      };
    case types.Display_Wind:
      return {
        title: state.title,
        weather: state.weather,
        isCelsius: state.isCelsius,
        showWind: action.data,
      };
    case types.Load_Data:
      return {
        title: store.title,
        weather: {
          image: action.data.image,
          celsiusTemp: action.data.celsiusTemp,
          fahrenheitTemp: action.data.fahrenheitTemp,
          city: action.data.city,
          wind: action.data.wind,
        },
        isCelsius: true,
        showWind: true,
      };
    default:
      return state;
  }
}