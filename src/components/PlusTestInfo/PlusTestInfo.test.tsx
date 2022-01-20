import { render, screen } from '@testing-library/react'

import PlusTestInfo from '.'

describe('<PlusTestInfo />', () => {
  it('should render the component', () => {
    const { container } = render(<PlusTestInfo />)
  })
})
