import { render, screen } from '@testing-library/react'

import WhereWeAre from '.'

describe('<WhereWeAre />', () => {
  it('should render the heading', () => {
    const { container } = render(<WhereWeAre />)

    expect(
      screen.getByRole('heading', { name: /WhereWeAre/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
