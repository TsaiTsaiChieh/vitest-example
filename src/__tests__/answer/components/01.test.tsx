import { render, screen } from '@testing-library/react'

import Button01 from '../../../components/01'

test('第一個測試', () => {
  render(<Button01 />)
  const button = screen.getByRole('button', {
    name: /^hi$/i,
  })
  expect(button).toBeInTheDocument()
})

test('快照', () => {
  const { container } = render(<Button01 />)
  // screen.debug()
  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="bg-green-500 text-white p-5 text-[30px] rounded-lg font-bold"
      >
        Hi
      </button>
    </div>
  `)
})
