import { render, screen } from '@testing-library/react'

import Infografico from '.'

describe('<Infografico />', () => {
  it('should render the component', () => {
    const { container } = render(<Infografico />)
  })
})
