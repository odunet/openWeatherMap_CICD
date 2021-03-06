import React, { useReducer, createContext } from 'react';
import reducer from '../reducers';

const initialState = {
  title: 'Title of Widget',
  weather: {
    image: '',
    celsiusTemp: '',
    fahrenheitTemp: '',
    city: '',
    wind: '',
  },
  isCelsius: true,
  showWind: true,
  showCard: false,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
