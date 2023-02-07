import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button04 from '../../../components/04'

describe('mock 時間、act', () => {
  test('fireEvent', () => {
    // https://vitest.dev/api/vi.html#vi-advancetimersbytime
    // Given
    // vi.useFakeTimers()
    // When
    const { getByRole, getByText } = render(<Button04 />)
    const button = getByRole('button', { name: /^click me/i })
    // screen.debug()
    fireEvent.click(button)
    // screen.debug()
    // Then
    expect(button).toBeDisabled()
    expect(getByText(/^loading\.\.\.$/i)).toBeInTheDocument()
    // wait for 3 seconds
    act(() => {
      // vi.runAllTimers() // invoke every initiated timer
      vi.advanceTimersByTime(3000)
    })
    // screen.debug()
    expect(button).not.toBeDisabled()
    expect(() => getByText(/^loading\.\.\.$/i)).toThrow()
  })

  test('userEvent', async () => {
    // https://stackoverflow.com/questions/74214740/how-to-use-user-event-library-in-conjunction-with-jests-fake-timers
    // Given
    vi.useFakeTimers()
    const user = userEvent.setup({ delay: null })
    // When
    const { getByRole, getByText } = render(<Button04 />)
    const button = getByRole('button', { name: /^click me/i })
    // screen.debug()
    await user.click(button)
    // screen.debug()
    // Then
    expect(button).toBeDisabled()
    expect(getByText(/^loading\.\.\.$/i)).toBeInTheDocument()
    // wait for 3 seconds
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    // screen.debug()
    expect(button).not.toBeDisabled()
    expect(() => getByText(/^loading\.\.\.$/i)).toThrow()
  })
})
