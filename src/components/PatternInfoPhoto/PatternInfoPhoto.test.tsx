import { render, screen } from '@testing-library/react'

import PatternInfoPhoto from '.'

describe('<PatternInfoPhoto />', () => {
  it('should render the component', () => {
    const { container } = render(<PatternInfoPhoto />)
  })
})
