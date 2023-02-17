import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../store'

export const renderWithProviders = (component: React.ReactElement) =>
  render(<Provider store={store}>{component}</Provider>)
