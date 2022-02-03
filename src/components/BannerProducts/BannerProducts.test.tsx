import { render, screen } from '@testing-library/react'

import BannerProducts from '.'

describe('<BannerProducts />', () => {
  it('should render the component', () => {
    const { container } = render(<BannerProducts />)
  })
})
