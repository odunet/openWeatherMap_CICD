import React, { useState, useContext } from 'react';
import { TextLabel, FlexRowDiv } from '../../../shared/styledComponents';
import { TextInput } from './Title.style';
import { changeTitle_Action } from '../../../actions';
import { store } from '../../../store';

export default function Title() {
  const [title, setTitle] = useState('');

  // Bring in dispatch
  const { dispatch } = useContext(store);

  const handleInput = ({ target }) => {
    setTitle(target.value);
    dispatch(changeTitle_Action(target.value));
  };

  return (
    <>
      <FlexRowDiv>
        <TextLabel htmlFor='controlTitle'>Title</TextLabel>
        <TextInput
          type='text'
          id='controlTitle'
          value={title}
          placeholder='Write Widget Title Here'
          onChange={(e) => handleInput(e)}
        />
      </FlexRowDiv>
    </>
  );
}
