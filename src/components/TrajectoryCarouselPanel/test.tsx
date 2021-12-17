import { render, screen } from '@testing-library/react'

import TrajectoryCarouselPanel from '.'

describe('<TrajectoryCarouselPanel />', () => {
  it('should render the heading', () => {
    const { container } = render(<TrajectoryCarouselPanel />)

    expect(screen.getByRole('heading', { name: /TrajectoryCarouselPanel/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
