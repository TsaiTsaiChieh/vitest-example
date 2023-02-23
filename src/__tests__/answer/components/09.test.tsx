
import { render, screen } from '@testing-library/react'

import Page09 from '../../../pages/09'
import { FakeComponent } from '../../../setupTests'

vi.mock('../../../pages/09/Trade', () => ({ default: () => FakeComponent }))
describe('mock component、整合測試', () => {
  test('Whole 09 Page', async () => {
    // When
    const { getByRole, getByText } = render(<Page09/>)
    screen.debug()
    // Expect
    expect(getByRole('heading', { name: /100 個木頭可以做什麼？/i })).toBeInTheDocument()
    expect(getByRole('button', { name: /加點木頭/i })).toBeInTheDocument()
    // expect(getByRole('heading', { name: /50 個木頭拿去交易/i })).toBeInTheDocument()
    // expect(getByText(/賣完，得 \$400/i)).toBeInTheDocument()
    expect(getByText(FakeComponent)).toBeInTheDocument()
    expect(getByRole('heading', { name: /50 個木頭拿去裝飾/i })).toBeInTheDocument()
    expect(getByText(/拿去裝飾小花園的圍籬/i)).toBeInTheDocument()
  })

  test('screenshot', () => {
    const { container } = render(<Page09/>)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="p-8 flex flex-col w-[600px]"
        >
          <div
            class="border border-green-800 p-8"
          >
            <h1
              class="font-bold text-2xl mb-4"
            >
              100
               個木頭可以做什麼？
            </h1>
            <button
              class="font-bold bg-green-400 p-3 rounded-lg hover:bg-green-600 text-white text-lg"
            >
              加點木頭
            </button>
          </div>
          <div
            class="flex"
          >
            FakeComponent
            <div
              class="p-4 border-red-400 border w-[50%]"
            >
              <h2
                class="font-bold text-2xl mb-4"
              >
                50
                 個木頭拿去裝飾
              </h2>
              <span>
                拿去裝飾小花園的圍籬
              </span>
            </div>
          </div>
        </div>
      </div>
    `)
  })
})
