import { render, screen } from '@testing-library/react'

import AppFooter from '.'

describe('<AppFooter />', () => {
  it('should render the component', () => {
    const { container } = render(<AppFooter />)
  })
})
