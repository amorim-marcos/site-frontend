import { render, screen } from '@testing-library/react'

import TrajectoryCarousel from '.'

describe('<TrajectoryCarousel />', () => {
  it('should render the heading', () => {
    const { container } = render(<TrajectoryCarousel />)

    expect(screen.getByRole('heading', { name: /TrajectoryCarousel/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
