import { render, screen } from '@testing-library/react'

import SearchIcon from '.'

describe('<SearchIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<SearchIcon />)
  })
})
