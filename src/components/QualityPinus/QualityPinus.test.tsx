import { render, screen } from '@testing-library/react'

import QualityPinus from '.'

describe('<QualityPinus />', () => {
  it('should render the component', () => {
    const { container } = render(<QualityPinus />)
  })
})
