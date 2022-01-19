import { render, screen } from '@testing-library/react'

import PlayIcon from '.'

describe('<PlayIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<PlayIcon />)
  })
})
