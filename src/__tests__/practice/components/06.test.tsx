import { render } from '@testing-library/react'

import Button06 from '../../../components/06'
import { ButtonEnum } from '../../../constants/enum'

describe('(First) Button with different types', () => {
  // Give

  test('Red type', () => {
    // When
    // Then
  })
  test('Green type', () => {
    // When
    // Then
  })
  test('Purple type', () => {
    // When
    // Then
  })
  test('X type', () => {
    // When
    // Then
  })
})

describe('(Rerender) Button with different types', () => {
  test('Test all types', () => {
  })
})

describe('(Each: Array) Button with different types', () => {
  test.each([[]])('Button with type: %s', () => {
  })
})

describe('(Each: Object) Button with different types', () => {
  test.each([{}])('Button with type: $type', () => {
  })
})

describe('(Each: Table) Button with different types', () => {
  test.each``('Button with type: $type', () => {
  })
})
