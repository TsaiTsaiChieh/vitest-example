import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'

import Button07_ from '../../../components/07-1'
import { server } from '../../../setupTests'
import { renderWithProviders } from '../../helpers'
const { VITE_APP_URL } = import.meta.env

describe('Test /week API', () => {
  test('API loading', async () => {
    // Given
    const user = userEvent.setup({ delay: null })
    // When
    const { getByRole, getByText } = renderWithProviders(<Button07_ />)
    const button = getByRole('button', { name: /^get data$/i })
    await user.click(button)
    // Then
    expect(getByText(/^loading\.\.\.$/i)).toBeInTheDocument()
  })
  test('API success', async () => {
    // Given
    // delay default is 0
    const user = userEvent.setup({ delay: 0 })
    // When
    const { getByRole } = renderWithProviders(<Button07_ />)
    const button = getByRole('button', { name: /^get data$/i })
    await user.click(button)
    // Then
    await waitFor(() => {
      expect(getByRole('list')).toBeInTheDocument()
    })
    const items = within(getByRole('list')).getAllByRole('listitem')
    expect(items).toHaveLength(7)
    expect(items).toMatchInlineSnapshot(`
      [
        <li>
          Mon
        </li>,
        <li>
          Tue
        </li>,
        <li>
          Web
        </li>,
        <li>
          Thu
        </li>,
        <li>
          Fri
        </li>,
        <li>
          Sat
        </li>,
        <li>
          Sun
        </li>,
      ]
    `)
  })
  test('API fail', async () => {
    // Given
    const errorMessage = 'SOMETHING_WRONG'
    const user = userEvent.setup({ delay: 0 })
    server.use(
      rest.get(`${VITE_APP_URL}/week`, (_req, res, ctx) => {
        return res(ctx.status(400), ctx.json({ error: errorMessage }))
      }),
    )
    // When
    const { getByRole, findByText } = renderWithProviders(<Button07_ />)
    const button = getByRole('button', { name: /^get data$/i })
    // Then
    await user.click(button)
    expect(await findByText(errorMessage)).toBeInTheDocument()
    screen.debug()
    // is equals to
    // await waitFor(() => {
    //   expect(screen.getByText(errorMessage)).toBeInTheDocument()
    // })
  })
})
