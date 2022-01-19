import { render, screen } from '@testing-library/react'

import ZoomInIcon from '.'

describe('<ZoomInIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<ZoomInIcon />)
  })
})
