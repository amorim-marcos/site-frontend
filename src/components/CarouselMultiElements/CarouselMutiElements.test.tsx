import { render, screen } from '@testing-library/react'

import CarouselMutiElements from '.'

describe('<CarouselMutiElements />', () => {
  it('should render the component', () => {
    const { container } = render(<CarouselMutiElements />)
  })
})
