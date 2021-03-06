import React, { useContext } from 'react';
import { DisplayCard, DisplayHeader, Loader } from './Display.style';
import { FlexColDiv, FlexRowDiv } from '../../shared/styledComponents';
import { Img } from './Display.style';
import { store } from '../../store';
import loader from '../../assets/images/loader.gif';

export default function Display() {
  const { state } = useContext(store);

  const weatherImage = `http://openweathermap.org/img/wn/${state.weather.image}@2x.png`;
  return (
    <>
      {state.showCard ? (
        <DisplayCard>
          <DisplayHeader>{state.title}</DisplayHeader>
          <FlexColDiv>
            <Img src={weatherImage} alt='Sunny' />
            <FlexRowDiv>
              <h2>{state.weather.city}</h2>
              <h1>
                {state.isCelsius
                  ? state.weather.celsiusTemp
                  : state.weather.fahrenheitTemp}
                <sup>o</sup>
              </h1>
              <p>
                {state.showWind ? <b>Wind </b> : ''}
                {state.showWind ? state.weather.wind : ''}
              </p>
            </FlexRowDiv>
          </FlexColDiv>
        </DisplayCard>
      ) : (
        <div id='displayTest'>
          <Loader src={loader} alt='loader' />
        </div>
      )}
    </>
  );
}
