import {
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'

import Button07 from '../../../components/07'
import { server } from '../../../setupTests'

const { VITE_APP_URL } = import.meta.env

describe('Test /week API', () => {
  test('API loading', async () => {
    // Given
    const user = userEvent.setup({ delay: null })
    // When
    const { getByRole, getByText } = render(<Button07 />)
    const button = getByRole('button', { name: /^get data$/i })
    await user.click(button)
    // Then
    expect(getByText(/^loading\.\.\.$/i)).toBeInTheDocument()
  })
  test('API success', async () => {
    // Given
    const user = userEvent.setup({ delay: 0 })
    // When
    const { getByRole } = render(<Button07 />)
    const button = getByRole('button', { name: /^get data$/i })
    await user.click(button)
    // Then
    // screen.debug()
    // wait for appearance inside an assertion
    await waitFor(() => {
      // screen.debug()
      // wait for appearance and return the element
      // 若槓掉下行，會只有 loading
      expect(getByRole('list')).toBeInTheDocument()
    })
    const { getAllByRole } = within(getByRole('list'))
    const items = getAllByRole('listitem')
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
        return res(ctx.status(400), ctx.json(errorMessage))
      }),
    )
    // When
    const { getByRole, findByText } = render(<Button07 />)
    const button = getByRole('button', { name: /^get data$/i })
    // Then
    await user.click(button)
    expect(await findByText(errorMessage)).toBeInTheDocument()
    // screen.debug()
    // is equals to
    // await waitFor(() => {
    //   expect(screen.getByText(errorMessage)).toBeInTheDocument()
    // })
  })
})
