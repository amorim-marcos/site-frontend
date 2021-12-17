import { render, screen } from '@testing-library/react'

import { mockPanelObj } from '@components/WhereWeAre/WhereWeAre'
import WhereWeArePanel from '.'

describe('<WhereWeArePanel />', () => {
  it('should render the heading', () => {
    const { container } = render(<WhereWeArePanel {...mockPanelObj} />)
  })
})
