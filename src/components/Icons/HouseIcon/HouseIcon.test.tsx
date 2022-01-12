import { render, screen } from '@testing-library/react'

import HouseIcon from '.'

describe('<HouseIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<HouseIcon />)
  })
})
