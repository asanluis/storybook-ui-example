import styled, { keyframes } from 'styled-components';

export const CircleContainer = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const CircleDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

interface SpinnerProps {
    rotate?: string;
    delay?: string;
}
export const OneCircle = styled.div<SpinnerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotate(${props => props.rotate});
  left: 0;
  top: 0;
  &::before {
    background-color: ${props => props.theme.colors.main};;
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    animation: ${CircleDelay} 1.2s infinite ease-in-out both;
    animation-delay: ${props => props.delay};
  }
`;
