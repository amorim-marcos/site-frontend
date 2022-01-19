import { render, screen } from '@testing-library/react'

import Product from '.'

describe('<Product />', () => {
  it('should render the component', () => {
    const { container } = render(<Product />)
  })
})
