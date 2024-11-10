import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/Global'
import theme from '../styles/theme'
import * as app from '../styles/App.styled'
import { StyledLogo } from '../styles/Logo.styled'
import '../styles/env.css'
import logo from '../assets/logo.svg'
import { Counter } from './Counter'

export const App: FC = () => {
  const TemplateLink: FC = () => {
    return (
      <app.StyledLink
        href='https://www.npmjs.com/package/create-application-template'
        rel='noreferrer'
        target='_blank'
      >
        here
      </app.StyledLink>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <app.StyledContainer>
        <app.StyledHeader>
          <h1>Create Containerized App Template</h1>
          <h2>An app template containerized via Docker!</h2>
          <h2>Access the CCrATe template <TemplateLink />...</h2>
        </app.StyledHeader>
        <app.StyledSection>
          <code className='card--env'>[NODE_ENV={process.env.NODE_ENV}]</code>
          <code className='card--env'>[EXAMPLE={process.env.EXAMPLE}]</code>
        </app.StyledSection>
        <app.StyledSection>
          <StyledLogo src={logo} alt='logo'/>
        </app.StyledSection>
        <app.StyledSection>
          <Counter />
        </app.StyledSection>
      </app.StyledContainer>
    </ThemeProvider>
  )
}
