import { render, screen } from '@testing-library/react'

import EmissionIcon from '.'

describe('<EmissionIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<EmissionIcon />)
  })
})
