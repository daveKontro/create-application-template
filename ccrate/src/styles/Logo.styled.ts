import { styled, keyframes } from 'styled-components'

const pulse = keyframes`
  from {
    transform: rotate(15deg);
  }

  to {
    transform: rotate(-15deg);
  }
`

export const StyledLogo = styled.img`
  height: 240px;
  pointer-events: none;
  transform-origin: top;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${pulse} 3.5s ease-in-out infinite alternate-reverse;
  }
`
