import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'

import Button07_ from '../../../components/07-1'
import { server } from '../../../setupTests'
import { renderWithProviders } from '../../helpers'

const { VITE_APP_URL } = import.meta.env
describe('Test /week API', () => {
  test('API loading', async () => {

  })
  test('API success', async () => {

  })
  test('API fail', async () => {

  })
})
