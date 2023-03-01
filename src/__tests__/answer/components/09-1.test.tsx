import { render, screen } from '@testing-library/react'

import Decorate from '../../../pages/09/Decorate'

// Decorate
describe('<Decorate />', () => {
  test('props', () => {
    // Given
    const num = 1000
    // When
    const { getByRole } = render(<Decorate num={num} />)
    screen.debug()
    // Then
    expect(
      getByRole('heading', { name: `${num} 個木頭拿去裝飾` }),
    ).toBeInTheDocument()
  })

  test('style', () => {
    // Given
    const num = 1000
    // When
    const { getByRole } = render(<Decorate num={num} />)
    // Then
    expect(getByRole('heading', { name: `${num} 個木頭拿去裝飾` }))
      .toMatchInlineSnapshot(`
      <h2
        class="font-bold text-2xl mb-4"
      >
        1000
         個木頭拿去裝飾
      </h2>
    `)
  })
})
