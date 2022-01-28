import { render, screen } from '@testing-library/react'

import Post from '.'

describe('<Post />', () => {
  it('should render the component', () => {
    const { container } = render(<Post />)
  })
})
