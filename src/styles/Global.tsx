import { FC } from 'react'
import { Global, css } from '@emotion/react'
import Exo2 from '../fonts/Exo2-Regular.woff2'

const GlobalStyles: FC = () => {
  return (
    <Global
      styles={(theme) => css`
        @font-face {
          font-family: '${theme.font}';
          src: url('${Exo2}') format('woff2');
        }

        body {
          margin: 0;
          font-family: '${theme.font}', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  )
}

export default GlobalStyles
