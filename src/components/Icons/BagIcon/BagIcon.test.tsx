import { render, screen } from '@testing-library/react'

import BagIcon from '.'

describe('<BagIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<BagIcon />)
  })
})
