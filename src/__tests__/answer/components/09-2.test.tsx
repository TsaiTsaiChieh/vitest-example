import { render, screen } from '@testing-library/react'

import Trade from '../../../pages/09/Trade'

// Given
const num = 1000

beforeEach(() => {
  // mock random
  vi.spyOn(global.Math, 'random').mockReturnValue(0.1)
})
describe('<Trade />', () => {
  test('spyOn', () => {
    // When
    const { getByRole, getByText } = render(<Trade num={num} />)
    // Expect
    // screen.debug()
    expect(getByRole('heading')).toHaveTextContent(`${num} 個木頭拿去交易`)
    // mockReturnValue * 10 = 0.1 * 10 = 1
    // Floor(1) + 1 = 1 + 1 = 2
    expect(getByText(`賣完，得 $${num * 2}`)).toBeInTheDocument()
  })

  test('style', () => {
    // When
    const { container } = render(<Trade num={num} />)
    // screen.debug(container)
    // Expect
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="p-4 border-indigo-600 border w-[50%]"
        >
          <h2
            class="font-bold text-2xl mb-4"
          >
            1000
             個木頭拿去交易
          </h2>
          <span>
            賣完，得 $
            2000
          </span>
        </div>
      </div>
    `)
  })
})
