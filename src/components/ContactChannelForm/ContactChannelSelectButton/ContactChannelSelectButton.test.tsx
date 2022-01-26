import { render, screen } from '@testing-library/react'

import ContactChannelSelectButton from '.'

describe('<ContactChannelSelectButton />', () => {
  it('should render the component', () => {
    const { container } = render(<ContactChannelSelectButton name="Test" />)
  })
})
