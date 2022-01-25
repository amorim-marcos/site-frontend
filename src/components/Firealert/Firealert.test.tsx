import { render, screen } from '@testing-library/react'

import FireAlert from '.'

describe('<FireAlert />', () => {
  it('should render the component', () => {
    const { container } = render(<FireAlert />)
  })
})
