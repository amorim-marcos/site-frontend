import { render, screen } from '@testing-library/react'

import InfoIcon from '.'

describe('<InfoIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<InfoIcon />)
  })
})
