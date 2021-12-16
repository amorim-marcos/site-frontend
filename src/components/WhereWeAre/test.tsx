import { render, screen } from '@testing-library/react'

import { mockPanels } from './WhereWeAre'
import WhereWeAre from '.'

describe('<WhereWeAre />', () => {
  it('should render the component', () => {
    const { container } = render(<WhereWeAre panels={mockPanels} />)
  })
})
