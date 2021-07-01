import React, { useContext } from 'react';
import { DisplayCard, DisplayHeader } from './Display.style';
import { FlexColDiv, FlexRowDiv } from '../../shared/styledComponents';
import { Img } from './Display.style';
import { store } from '../../store';

export default function Display() {
  const { state } = useContext(store);

  const weatherImage = `http://openweathermap.org/img/wn/${state.weather.image}@2x.png`;
  return (
    <DisplayCard>
      <DisplayHeader>{state.title}</DisplayHeader>
      <FlexColDiv>
        <Img src={weatherImage} alt='Sunny' />
        <FlexRowDiv>
          <h3>{state.weather.city}</h3>
          <h3>
            {state.isCelsius
              ? state.weather.celsiusTemp
              : state.weather.fahrenheitTemp}
          </h3>
          <h4>{state.showWind ? state.weather.wind : ''}</h4>
        </FlexRowDiv>
      </FlexColDiv>
    </DisplayCard>
  );
}