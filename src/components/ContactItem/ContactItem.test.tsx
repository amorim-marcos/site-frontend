import { render, screen } from '@testing-library/react'

import ContactItem from '.'

describe('<ContactItem />', () => {
  it('should render the component', () => {
    const { container } = render(<ContactItem />)
  })
})
