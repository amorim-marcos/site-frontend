import { render } from '@testing-library/react'

import { mockPanels } from './WhereWeAre'
import WhereWeAre from '.'

describe('<WhereWeAre />', () => {
  it('should render the component', () => {
    render(<WhereWeAre panels={mockPanels} />)
  })
})
