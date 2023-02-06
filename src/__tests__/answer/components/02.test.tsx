import { render, screen } from '@testing-library/react'

import Button02 from '../../../components/02'

test('測試步驟、props', () => {
  // Give, Arrange
  const content = 'Hello'
  // When, Act
  render(<Button02 content={content} />)
  // Then, Assert
  expect(
    screen.getByRole('button', {
      name: /^hello$/i,
    }),
  ).toHaveTextContent(content)
})
