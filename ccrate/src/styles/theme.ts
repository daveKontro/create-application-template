import { transparentize } from 'polished'

const palette = {
  background: '#182f37',
  primary: '#e2b432',
}

const theme = {
  font: 'exo2',
  colors: {
    palette,
    link: {
      main: transparentize(0.4, palette.primary),
      hover: transparentize(0.6, palette.primary),
    },
  },
}

export default theme
