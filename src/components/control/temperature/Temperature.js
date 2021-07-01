import React, { useState, useContext } from 'react';
import { TextLabel, Radio, FlexColDiv } from '../../../shared/styledComponents';
import { changeUnits_Action } from '../../../actions';
import { store } from '../../../store';

export default function Temperature() {
  const [radio, setRadio] = useState('C');

  // Bring in dispatch
  const { dispatch } = useContext(store);

  const handleCheck = ({ target }) => {
    setRadio(target.value);
    if (target.value === 'C') {
      dispatch(changeUnits_Action(true));
    } else {
      dispatch(changeUnits_Action(false));
    }
  };

  return (
    <>
      <TextLabel htmlFor='controlTitle'>Temperature</TextLabel>
      <FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            id='celcius'
            name='temperature'
            value='C'
            onChange={(e) => handleCheck(e)}
            // onChange={(e) => setRadio('C')}
            checked={radio === 'C'}
          />
          <p>
            <sup>o</sup>C
          </p>
        </FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            id='farenhiet'
            name='temperature'
            value='F'
            onChange={(e) => handleCheck(e)}
            // onChange={(e) => setRadio('F')}
            checked={radio === 'F'}
          />
          <p>F</p>
        </FlexColDiv>
      </FlexColDiv>
    </>
  );
}