import { render, screen } from '@testing-library/react'

import AlertIcon from '.'

describe('<AlertIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<AlertIcon />)
  })
})
