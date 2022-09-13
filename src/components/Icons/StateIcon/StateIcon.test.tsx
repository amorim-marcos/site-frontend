import { render, screen } from '@testing-library/react'

import StateIcon from '.'

describe('<StateIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<StateIcon />)
  })
})
