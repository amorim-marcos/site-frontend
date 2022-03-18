import { render, screen } from '@testing-library/react'

import GrafismLeft from '.'

describe('<GrafismLeft />', () => {
  it('should render the component', () => {
    const { container } = render(<GrafismLeft />)
  })
})
