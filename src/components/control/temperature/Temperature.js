import React, { useState, useContext } from 'react';
import { TextLabel, Radio, FlexColDiv } from '../../../shared/styledComponents';
import { changeUnits_Action } from '../../../actions';
import { store } from '../../../store';
import { handleCheck } from '../../../helper/handleCheck';

export default function Temperature() {
  const [radio, setRadio] = useState('C');

  // Bring in dispatch
  const { dispatch } = useContext(store);

  return (
    <>
      <TextLabel htmlFor='controlTitle'>Temperature</TextLabel>
      <FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            data-testid='celsuis'
            id='celcuis'
            name='temperature'
            value='C'
            onChange={(e) =>
              handleCheck(dispatch, setRadio, changeUnits_Action, e.target)
            }
            checked={radio === 'C'}
          />
          <p>
            <sup>o</sup>C
          </p>
        </FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            data-testid='fahrenhiet'
            id='fahrenhiet'
            name='temperature'
            value='F'
            onChange={(e) =>
              handleCheck(dispatch, setRadio, changeUnits_Action, e.target)
            }
            checked={radio === 'F'}
          />
          <p>F</p>
        </FlexColDiv>
      </FlexColDiv>
    </>
  );
}
