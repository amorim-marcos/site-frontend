import { render, screen } from '@testing-library/react'

import HeaderTopMenuItem from '.'

describe('<HeaderTopMenuItem />', () => {
  it('should render the component', () => {
    const { container } = render(<HeaderTopMenuItem />)
  })
})
