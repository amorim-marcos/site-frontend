import { render, screen } from '@testing-library/react'

import LogoBerneck from '.'

describe('<LogoBerneck />', () => {
  it('should render the component', () => {
    const { container } = render(<LogoBerneck />)
  })
})
