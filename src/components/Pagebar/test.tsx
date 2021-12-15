import { render, screen } from '@testing-library/react'

import Pagebar from '.'

describe('<Pagebar />', () => {
  it('should render the component', () => {
    const { container } = render(<Pagebar />)
  })
})
