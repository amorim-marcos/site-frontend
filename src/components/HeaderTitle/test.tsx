import { render, screen } from '@testing-library/react'

import HeaderTitle from '.'

describe('<HeaderTitle />', () => {
  it('should render the component', () => {
    const { container } = render(<HeaderTitle />)
  })
})
