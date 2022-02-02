import { render, screen } from '@testing-library/react'

import HouseWithPath from '.'

describe('<HouseWithPath />', () => {
  it('should render the component', () => {
    const { container } = render(<HouseWithPath />)
  })
})
