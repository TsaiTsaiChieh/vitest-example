import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import Button08_ from '../../../components/08-1'
import { store } from '../../../store'
import { add } from '../../../store/reducers/counterSlice'
import { renderWithProviders } from '../../helpers'

describe('react hook', () => {
  test('initial state', async () => {
    // Given
    // Then
    const { getByText } = renderWithProviders(<Button08_ />)
    // Expect
    expect(store.getState().counter.count).toBe(0)
    expect(getByText(/0/i)).toBeInTheDocument()
  })
  test('trigger the reducer directly', async () => {
    // Given
    // Then
    const { getByText } = renderWithProviders(<Button08_ />)
    act(() => {
      store.dispatch(add())
    })
    // Expect
    expect(store.getState().counter.count).toBe(1)
    expect(getByText(/1/i)).toBeInTheDocument()
  })
  test('trigger the reducer by useEvent', async () => {
    // Given
    const user = userEvent.setup()
    // Then
    const { getByText, getByRole } = renderWithProviders(<Button08_ />)
    const button = getByRole('button', { name: /^increment$/i })
    await user.click(button)
    // screen.debug()
    // Expect
    expect(store.getState().counter.count).toBe(2)
    expect(getByText(/2/i)).toBeInTheDocument()
  })
})
