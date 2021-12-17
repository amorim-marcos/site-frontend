import { render, screen } from '@testing-library/react'

import HeaderMenuSubItem from '.'

describe('<HeaderMenuSubItem />', () => {
  it('should render the component', () => {
    const { container } = render(<HeaderMenuSubItem />)
  })
})
