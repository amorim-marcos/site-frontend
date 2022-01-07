import { render, screen } from '@testing-library/react'

import Infographic from '.'

describe('<Infographic />', () => {
  it('should render the component', () => {
    const { container } = render(<Infographic />)
  })
})
