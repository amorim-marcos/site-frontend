import { render, screen } from '@testing-library/react'

import PlusPanelsPresentation from '.'

describe('<PlusPanelsPresentation />', () => {
  it('should render the component', () => {
    const { container } = render(<PlusPanelsPresentation />)
  })
})
