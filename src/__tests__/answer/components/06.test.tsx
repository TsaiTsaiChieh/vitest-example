import { render } from '@testing-library/react'

import Button06 from '../../../components/06'
import { ButtonEnum } from '../../../constants/enum'

describe('(First) Button with different types', () => {
  // Give
  const Clx = {
    [ButtonEnum.RED]: 'bg-red-500',
    [ButtonEnum.GREEN]: 'bg-green-500',
    [ButtonEnum.BLUE]: 'bg-blue-500',
    X: 'bg-blue-500',
  }
  test('Red type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.RED}/>)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.RED])
  })
  test('Green type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.GREEN}/>)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.GREEN])
  })
  test('Blue type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.BLUE}/>)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.BLUE])
  })
  test('X type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.BLUE}/>)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx.X)
  })
})

describe('(Rerender) Button with different types', () => {
  test('Test all types', () => {
    // Give
    const Clx = {
      [ButtonEnum.RED]: 'bg-red-500',
      [ButtonEnum.GREEN]: 'bg-green-500',
      [ButtonEnum.BLUE]: 'bg-blue-500',
      X: 'bg-blue-500',
    }

    const { getByRole, rerender } = render(<Button06 type={ButtonEnum.RED}/>)
    const button = getByRole('button', { name: /^Button$/i })
    expect(button).toHaveClass(Clx[ButtonEnum.RED])
    rerender(<Button06 type={ButtonEnum.GREEN}/>)
    expect(button).toHaveClass(Clx[ButtonEnum.GREEN])
    rerender(<Button06 type={ButtonEnum.BLUE}/>)
    expect(button).toHaveClass(Clx[ButtonEnum.BLUE])
    rerender(<Button06 type="X"/>)
    expect(button).toHaveClass(Clx.X)
  })
})
