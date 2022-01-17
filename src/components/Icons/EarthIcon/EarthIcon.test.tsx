import { render, screen } from '@testing-library/react'

import EarthIcon from '.'

describe('<EarthIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<EarthIcon />)
  })
})
