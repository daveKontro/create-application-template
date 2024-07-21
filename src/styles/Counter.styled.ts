import { styled } from 'styled-components'

export const StyledCounter = styled.button(({ theme }) => `
  height: 40px;
  padding: 10px;
  font-size: 18px;
  color: ${theme.colors.palette.primary};
  background-color: ${theme.colors.palette.background};
  border: 1px solid ${theme.colors.palette.primary};
  border-radius: 8px;
  transition-duration: 0.5s;

  &:hover {
    border-radius: 20px;
  }
`)
