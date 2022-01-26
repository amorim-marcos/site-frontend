import { render, screen } from '@testing-library/react'

import ContactChannelFormLabel from '.'

describe('<ContactChannelFormLabel />', () => {
  it('should render the component', () => {
    const { container } = render(<ContactChannelFormLabel />)
  })
})
