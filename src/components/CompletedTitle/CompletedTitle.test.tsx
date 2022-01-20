import { render, screen } from '@testing-library/react'

import CompletedTitle from '.'

describe('<CompletedTitle />', () => {
  it('should render the component', () => {
    const { container } = render(<CompletedTitle />)
  })
})
