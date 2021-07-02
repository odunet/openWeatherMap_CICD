import React, { useState, useContext } from 'react';
import { TextLabel, FlexColDiv, Radio } from '../../../shared/styledComponents';
import { displayWind_Action } from '../../../actions';
import { store } from '../../../store';

export default function Wind() {
  const [radio, setRadio] = useState('on');

  // Bring in dispatch
  const { dispatch } = useContext(store);

  const handleCheck = ({ target }) => {
    setRadio(target.value);
    if (target.value === 'on') {
      dispatch(displayWind_Action(true));
    } else {
      dispatch(displayWind_Action(false));
    }
  };

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
            onChange={(e) => handleCheck(e)}
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
            onChange={(e) => handleCheck(e)}
            checked={radio === 'off'}
          />
          <p>Off</p>
        </FlexColDiv>
      </FlexColDiv>
    </>
  );
}
