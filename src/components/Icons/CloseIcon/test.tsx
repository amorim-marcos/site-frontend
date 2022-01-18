import { render, screen } from '@testing-library/react'

import CloseIcon from '.'

describe('<CloseIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<CloseIcon />)
  })
})
