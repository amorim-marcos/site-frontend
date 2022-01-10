import { render, screen } from '@testing-library/react'

import EmployeesIcon from '.'

describe('<EmployeesIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<EmployeesIcon />)
  })
})
