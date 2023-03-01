import { render, screen } from '@testing-library/react'

import Decorate from '../../../../pages/09/Decorate'

// Decorate
describe('<Decorate />', () => {
  test('props', () => {
    // Given
    const num = 1000
    // When
    const { getByRole } = render(<Decorate num={num} />)
    // screen.debug()
    // Then
    expect(
      getByRole('heading', { name: `${num} 個木頭拿去裝飾` }),
    ).toBeInTheDocument()
  })

  test('style', () => {
    // Given
    const num = 1000
    // When
    const { container } = render(<Decorate num={num} />)
    // Then
    // screen.debug(container)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="p-4 border-red-400 border w-[50%]"
        >
          <h2
            class="font-bold text-2xl mb-4"
          >
            1000
             個木頭拿去裝飾
          </h2>
          <span>
            拿去裝飾小花園的圍籬
          </span>
        </div>
      </div>
    `)
  })
})
