import styled, { keyframes } from 'styled-components';

// Variables
const fontMainColor = '#424242';
const cardBackground = 'white';

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
  background: ${cardBackground};
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

export const Loader = styled.img`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);

  @media (max-width: 750px) {
    top: 70%;
    left: 50%;
  }
`;

export const Img = styled.img`
  padding: 20px;
  transition: transform 0.3s;
  transition-delay: 0.1s;

  &:hover {
    transform: scale(1.2);
  }
`;
