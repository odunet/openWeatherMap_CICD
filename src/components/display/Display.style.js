import styled, { keyframes } from 'styled-components';

// Variables
const fontMainColor = '#424242';
const mainBackground = '#f7f5fc';

// Create the keyframes
const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
`;

export const DisplayCard = styled.div`
  border-radius: 10px;
  background: ${mainBackground};
  color: ${fontMainColor};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  height: 60%;
  width: 70%;
  margin: auto;
  margin-top: 30px;

  &:hover {
    animation: ${shake} 0.3s ease-in-out both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
  }
`;

export const DisplayHeader = styled.h1`
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100px;
  height: auto;
  padding: 10px;
  transition: transform 0.3s;
  transition-delay: 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;