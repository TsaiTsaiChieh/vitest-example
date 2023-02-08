import { render } from '@testing-library/react'

import Button06 from '../../../components/06'
import { ButtonEnum } from '../../../constants/enum'

const defaultClx = 'bg-purple-500'
describe('(First) Button with different types', () => {
  // Give
  const Clx = {
    [ButtonEnum.RED]: 'bg-red-500',
    [ButtonEnum.GREEN]: 'bg-green-500',
    [ButtonEnum.PURPLE]: defaultClx,
    X: defaultClx,
  }
  test('Red type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.RED} />)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.RED])
  })
  test('Green type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.GREEN} />)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.GREEN])
  })
  test('Purple type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.PURPLE} />)
    const button = getByRole('button', { name: /^Button$/i })
    // Then
    expect(button).toHaveClass(Clx[ButtonEnum.PURPLE])
  })
  test('X type', () => {
    // When
    const { getByRole } = render(<Button06 type={ButtonEnum.PURPLE} />)
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
      [ButtonEnum.PURPLE]: defaultClx,
      X: defaultClx,
    }

    const { getByRole, rerender } = render(<Button06 type={ButtonEnum.RED} />)
    const button = getByRole('button', { name: /^Button$/i })
    expect(button).toHaveClass(Clx[ButtonEnum.RED])
    rerender(<Button06 type={ButtonEnum.GREEN} />)
    expect(button).toHaveClass(Clx[ButtonEnum.GREEN])
    rerender(<Button06 type={ButtonEnum.PURPLE} />)
    expect(button).toHaveClass(Clx[ButtonEnum.PURPLE])
    rerender(<Button06 type='X' />)
    expect(button).toHaveClass(Clx.X)
  })
})

describe('(Each: Array) Button with different types', () => {
  test.each([
    [ButtonEnum.RED, 'bg-red-500'],
    [ButtonEnum.GREEN, 'bg-green-500'],
    [ButtonEnum.PURPLE, defaultClx],
    ['X', defaultClx],
  ])('Button with type: %s', (type, expected) => {
    const { getByRole } = render(<Button06 type={type} />)
    expect(getByRole('button', { name: /^Button$/i })).toHaveClass(expected)
  })
})

describe('(Each: Object) Button with different types', () => {
  test.each([
    { type: ButtonEnum.RED, expected: 'bg-red-500' },
    { type: ButtonEnum.GREEN, expected: 'bg-green-500' },
    { type: ButtonEnum.PURPLE, expected: defaultClx },
    { type: 'X', expected: defaultClx },
  ])('Button with type: $type', ({ type, expected }) => {
    const { getByRole } = render(<Button06 type={type} />)
    expect(getByRole('button', { name: /^Button$/i })).toHaveClass(expected)
  })
})

describe('(Each: Table) Button with different types', () => {
  test.each`
    type                | expected
    ${ButtonEnum.RED}   | ${'bg-red-500'}
    ${ButtonEnum.GREEN} | ${'bg-green-500'}
    ${ButtonEnum.PURPLE}  | ${defaultClx}
    ${'X'}              | ${defaultClx}
  `('Button with type: $type', ({ type, expected }) => {
    const { getByRole } = render(<Button06 type={type} />)
    expect(getByRole('button', { name: /^Button$/i })).toHaveClass(expected)
  })
})
