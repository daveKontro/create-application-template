import { transparentize } from 'polished'

const theme = {
  font: 'exo2',
  colors: {
    palette: {
      background: '#182f37',
      primary: '#e2b432',
    },
    get link() {
      const link = this.palette.primary

      return {
        regular: transparentize(0.4, link),
        hover: transparentize(0.6, link),
      }
    },
  },
}

export default theme
