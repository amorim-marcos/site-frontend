import { render, screen } from '@testing-library/react'

import PostRelationalContent from '.'

describe('<PostRelationalContent />', () => {
  it('should render the component', () => {
    const { container } = render(<PostRelationalContent />)
  })
})
