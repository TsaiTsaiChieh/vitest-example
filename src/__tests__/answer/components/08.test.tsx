import { render, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useCounter } from '../../../hooks/useCounter'

describe('react hook', () => {
  test('Test component', async () => {
    let result: any
    const TestComponent = () => {
      result = useCounter()
      return null
    }
    render(<TestComponent />)
    expect(result.count).toBe(0)
    act(() => {
      result.increment()
    })
    expect(result.count).toBe(1)
  })

  test('renderHook', async () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
})
