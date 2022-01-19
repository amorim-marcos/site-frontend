import { render, screen } from '@testing-library/react'

import TapIcon from '.'

describe('<TapIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<TapIcon />)
  })
})
