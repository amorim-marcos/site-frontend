import { render, screen } from '@testing-library/react'

import FeaturedBanner from '.'

describe('<FeaturedBanner />', () => {
  it('should render the component', () => {
    const { container } = render(<FeaturedBanner />)
  })
})
