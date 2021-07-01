import styled from 'styled-components';

// Variables
const cardBackground = '#dfdff2';
const fontMainColor = '#424242';

export const Card = styled.div`
  border-radius: 10px;
  background: ${cardBackground};
  color: ${fontMainColor};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  height: 50vh;
  width: 70%;
  min-width: 700px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VerticalLine = styled.div`
  border-left: 1px solid grey;
  height: 50%;
  margin-top: 90px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
`;
