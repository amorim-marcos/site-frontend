import { render, screen } from '@testing-library/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render the component', () => {
    const { container } = render(<Arrow />)
  })
})
