import { render, screen } from '@testing-library/react'

import SeeMore from '.'

describe('<SeeMore />', () => {
  it('should render the component', () => {
    const { container } = render(<SeeMore />)
  })
})
