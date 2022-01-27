import { render, screen } from '@testing-library/react'

import BadgeIcon from '.'

describe('<BadgeIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<BadgeIcon />)
  })
})
