import { render, screen } from '@testing-library/react'

import CustomLink from '.'

describe('<CustomLink />', () => {
  it('should render the component', () => {
    const { container } = render(<CustomLink />)
  })
})
