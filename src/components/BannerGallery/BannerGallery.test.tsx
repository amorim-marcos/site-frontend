import { render, screen } from '@testing-library/react'

import BannerGallery from '.'

describe('<BannerGallery />', () => {
  it('should render the component', () => {
    const { container } = render(<BannerGallery />)
  })
})
