import { fireEvent, render, screen } from '@testing-library/react'

import Button03 from '../../../components/03'

describe('mock function', () => {
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
})
