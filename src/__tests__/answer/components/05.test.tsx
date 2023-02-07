import 'jest-styled-components'

import { render } from '@testing-library/react'

import Button05 from '../../../components/05'

test('styled components、debug', () => {
  const { container } = render(<Button05 />)
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background: #77bb1b;
      color: white;
      padding: 1.25rem;
      font-weight: 700;
      font-size: 30px;
      border-radius: 8px;
    }

    <div>
      <button
        class="c0"
      >
        Button
      </button>
    </div>
  `)
})
