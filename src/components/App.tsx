import { FC, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/Global'
import theme from '../styles/theme'
import * as app from '../styles/App.styled'
import { StyledLogo } from '../styles/Logo.styled'
import '../styles/env.css'
import logo from '../assets/logo.svg'
import { Counter } from './Counter'
import { Typewriter } from './Typewriter'

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

export const App: FC = () => {
  useEffect(() => {
    // - blob: a chunk of raw data treated as a file like object
    //   - can contain text, JSON, binary data, or even JavaScript code.
    // - turn it into a URL so the browser can treat it like a real file
    // - in short dynamically create "files" in memory
    //
    // - can't use a seperate file because the hot module refresh module
    //   is having issues recognizing: new URL('./worker.js', import.meta.url)
    //
    const workerCode = () => {
      // the browser spins up a seperate worker thread... 
      // in a web worker the global scope is called "self", 
      // like window in the main thread, so it's safe to use 
      // "self" inside the worker thread... eslint is crying 
      // because self doesn't exist in the main browser thread
      const ctx:Worker = self as unknown as Worker  // eslint-disable-line no-restricted-globals

      ctx.onmessage = (event) => {
        const { lockingCount } = event.data

        console.log(`worker: starting count to ${lockingCount}`)

        let count = 0
        while (count < lockingCount) {
          ++count
        }

        console.log(`Worker: done counting ${count}`)

        ctx.postMessage({
          done: true,
          count,
        })
      }
    }

    // convert function to string
    const codeAsString = workerCode.toString()
    const blob = new Blob(
      [`(${codeAsString})()`],
      { type: 'application/javascript' }
    )
    const worker = new Worker(URL.createObjectURL(blob))

    worker.postMessage({ lockingCount: 10_000_000_000 })

    worker.onmessage = (event) => {
      console.log('Worker finished:', event.data)
      worker.terminate()
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <app.StyledContainer>
        <app.StyledHeader>
          <h1>
            <Typewriter
              text={'Create Application Template'}
              speed={50}
            />
          </h1>
          <h2>
            <Typewriter
              text={'Configured and under your control!'}
              speed={50}
              delay={300}
            />
          </h2>
          <h2>
            <Typewriter
              text={'Access the template'}
              speed={50}
              delay={1300}
            >
              <TemplateLink />
            </Typewriter>
          </h2>
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
