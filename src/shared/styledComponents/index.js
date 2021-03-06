import styled from 'styled-components';

// Variables
const fontSizeBig = '1.5em';
const radioUncheckedColor = '#d1d3d1';
const radioCheckedColor = '#7343d9';

//Styled components
export const TextLabel = styled.label`
  font-size: ${fontSizeBig};
  text-align: left;
  padding-top: 15px;
`;

export const FlexColDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Radio = styled.input`
  margin: 20px;
  &:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: ${radioUncheckedColor};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: ${radioCheckedColor};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;
