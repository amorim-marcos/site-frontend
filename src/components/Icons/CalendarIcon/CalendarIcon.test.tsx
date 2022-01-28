import { render, screen } from '@testing-library/react'

import CalendarIcon from '.'

describe('<CalendarIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<CalendarIcon />)
  })
})
