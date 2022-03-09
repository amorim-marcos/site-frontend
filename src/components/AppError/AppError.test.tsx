import { render, screen } from '@testing-library/react'

import AppError from '.'

describe('<AppError />', () => {
  it('should render the component', () => {
    const { container } = render(<AppError />)
  })
})
