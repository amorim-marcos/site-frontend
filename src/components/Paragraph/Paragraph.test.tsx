import { render, screen } from '@testing-library/react'

import Paragraph from '.'

describe('<Paragraph />', () => {
  it('should render the component', () => {
    const { container } = render(<Paragraph>test</Paragraph>)
  })
})
