import { render, screen } from '@testing-library/react'

import EnergyIcon from '.'

describe('<EnergyIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<EnergyIcon />)
  })
})
