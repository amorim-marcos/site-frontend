import { render, screen } from '@testing-library/react'

import NavLink from '.'

describe('<NavLink />', () => {
  it('should render the component', () => {
    const { container } = render(<NavLink />)
  })
})
