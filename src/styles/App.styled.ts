import { styled } from 'styled-components'

export const StyledContainer = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: max(1em, 18px);
  color: ${theme.colors.palette.primary};
  background-color: ${theme.colors.palette.background};
`)

export const StyledHeader = styled.header`
  text-align: center;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2vh;
`

export const StyledLink = styled.a(({ theme }) => `
  color: ${theme.colors.palette.primary};
  opacity: 0.6;
`)
