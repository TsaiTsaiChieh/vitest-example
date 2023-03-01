import { render, screen } from '@testing-library/react'

import Page09 from '../../../../pages/09'
import { FakeComponent } from '../../../../setupTests'

vi.mock('../../../../pages/09/Trade', () => ({ default: () => FakeComponent }))
describe('mock component、整合測試', () => {
  test('Whole 09 Page', async () => {
    // When
    // Expect
  })

  test('screenshot', () => {
  })
})
