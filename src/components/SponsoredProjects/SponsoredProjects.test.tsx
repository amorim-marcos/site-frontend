import { render, screen } from '@testing-library/react'

import SponsoredProjects from '.'

describe('<SponsoredProjects />', () => {
  it('should render the component', () => {
    const { container } = render(<SponsoredProjects />)
  })
})
