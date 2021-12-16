import { render, screen } from '@testing-library/react'

import HeaderMenuItem from '.'

describe('<HeaderMenuItem />', () => {
  it('should render the component', () => {
    const { container } = render(<HeaderMenuItem />)
  })
})
