import { render, screen } from '@testing-library/react'

import ContactChannelInfoInput from '.'

describe('<ContactChannelInfoInput />', () => {
  it('should render the component', () => {
    const { container } = render(<ContactChannelInfoInput />)
  })
})
