import { render, screen } from '@testing-library/react'

import Firealert from '.'

describe('<Firealert />', () => {
  it('should render the component', () => {
    const { container } = render(<Firealert />)
  })
})
