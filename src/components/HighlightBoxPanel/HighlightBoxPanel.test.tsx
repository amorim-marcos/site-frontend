import { render, screen } from '@testing-library/react'

import HighlightBoxPanel from '.'

describe('<HighlightBoxPanel />', () => {
  it('should render the component', () => {
    const { container } = render(<HighlightBoxPanel />)
  })
})
