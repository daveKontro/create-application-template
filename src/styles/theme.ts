import { transparentize } from 'polished'

const palette = {
  background: '#454145',
  primary: '#cec2eb',
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
