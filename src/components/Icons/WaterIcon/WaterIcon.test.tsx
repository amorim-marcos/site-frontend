import { render, screen } from '@testing-library/react'

import WaterIcon from '.'

describe('<WaterIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<WaterIcon />)
  })
})
