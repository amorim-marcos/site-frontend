import { render, screen } from '@testing-library/react'

import SocialIcon from '.'

describe('<SocialIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<SocialIcon />)
  })
})
