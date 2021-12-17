import { render, screen } from '@testing-library/react'

import AppHeader from '.'

describe('<AppHeader />', () => {
  it('should render the component', () => {
    const { container } = render(<AppHeader />)
  })
})
