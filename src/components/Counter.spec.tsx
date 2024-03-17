import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Counter } from './Counter'

test('count increases per click', async () => {
  render(<Counter />)
  const button = await screen.findByRole('button', { name: /count/i })

  const user = userEvent.setup()
  await user.click(button)
  const results = button.innerHTML.match(/\d/g)

  expect(results).toBeArrayOfSize(1)
  expect(results).toIncludeAllMembers(['1'])
})
