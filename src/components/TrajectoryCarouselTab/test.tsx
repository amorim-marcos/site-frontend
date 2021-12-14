import { render, screen } from '@testing-library/react'

import TrajectoryCarouselTab from '.'

describe('<TrajectoryCarouselTab />', () => {
  it('should render the heading', () => {
    const { container } = render(<TrajectoryCarouselTab />)

    expect(screen.getByRole('heading', { name: /TrajectoryCarouselTab/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
