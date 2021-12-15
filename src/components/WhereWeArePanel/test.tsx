import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { render, screen } from '@testing-library/react'

import WhereWeArePanel from '.'

describe('<WhereWeArePanel />', () => {
  it('should render the heading', () => {
    const { container } = render(<WhereWeArePanel {...mockObject} />)

    expect(
      screen.getByRole('heading', { name: /WhereWeArePanel/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
