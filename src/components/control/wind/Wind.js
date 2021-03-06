import React, { useState, useContext } from 'react';
import { TextLabel, FlexColDiv, Radio } from '../../../shared/styledComponents';
import { displayWind_Action } from '../../../actions';
import { store } from '../../../store';
import { handleCheckWind } from '../../../helper/handleCheck';

export default function Wind() {
  const [radio, setRadio] = useState('on');

  // Bring in dispatch
  const { dispatch } = useContext(store);

  return (
    <>
      <TextLabel htmlFor='controlTitle'>Wind</TextLabel>
      <FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            id='on'
            name='wind'
            value='on'
            onChange={(e) =>
              handleCheckWind(dispatch, setRadio, displayWind_Action, e.target)
            }
            checked={radio === 'on'}
          />{' '}
          <p>On</p>
        </FlexColDiv>
        <FlexColDiv>
          <Radio
            type='radio'
            id='off'
            name='wind'
            value='off'
            onChange={(e) =>
              handleCheckWind(dispatch, setRadio, displayWind_Action, e.target)
            }
            checked={radio === 'off'}
          />
          <p>Off</p>
        </FlexColDiv>
      </FlexColDiv>
    </>
  );
}
