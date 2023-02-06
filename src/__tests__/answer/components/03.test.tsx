import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button03 from '../../../components/03'

describe('mock functions', () => {
  test('fireEvent', () => {
    // Given
    const content = 'Click'
    const fn = vi.fn()
    // When
    render(<Button03 content={content} onClick={fn}/>)
    fireEvent.mouseDown(screen.getByRole('button', {
      name: /^click$/i,
    }))
    // Then
    expect(fn).toHaveBeenCalledTimes(1)
  })
  test('userEvent', async () => {
    // Given
    const content = 'Click'
    const fn = vi.fn()
    // When
    render(<Button03 content={content} onClick={fn}/>)
    await userEvent.click(screen.getByRole('button', {
      name: /^click$/i,
    }))
    // Then
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
