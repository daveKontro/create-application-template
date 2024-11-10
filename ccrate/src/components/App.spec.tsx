import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { App } from './App'

test('renders title', () => {
  render(<App />)

  expect(screen).toMatchSnapshot()
  expect(screen.getByText(/create containerized app template/i)).toBeInTheDocument()
})
