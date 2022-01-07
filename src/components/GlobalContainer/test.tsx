import { render, screen } from '@testing-library/react'

import GlobalContainer from '.'

describe('<GlobalContainer />', () => {
  it('should render the component', () => {
    const { container } = render(<GlobalContainer />)
  })
})
