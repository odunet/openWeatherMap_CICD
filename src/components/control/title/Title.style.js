import styled from 'styled-components';

const mainBackground = '#f7f5fc';
const fontMainColor = '#424242';
const fontBlurColor = '#9c9595';
const fontSizeSmall = '1.2em';

export const TextInput = styled.input`
  font-size: ${fontSizeSmall};
  background: ${mainBackground};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border: none;
  text-align: left;
  color: ${fontBlurColor};
  margin-bottom: 20px;
  border-radius: 5px;
  height: 2.5em;
  width: 80%;
  margin-top: 0.5em;

  &:focus {
    outline: none;
    color: ${fontMainColor};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  }
`;
