import { render, screen } from '@testing-library/react'

import CarbonIcon from '.'

describe('<CarbonIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<CarbonIcon />)
  })
})
