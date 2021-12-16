import { render, screen } from '@testing-library/react'

import { mockPanelObj } from 'components/WhereWeAre/WhereWeAre'
import WhereWeArePanelFooter from '.'

describe('<WhereWeArePanelFooter />', () => {
  it('should render the component', () => {
    const { container } = render(
      <WhereWeArePanelFooter
        {...mockPanelObj}
        address={`${mockPanelObj.city}, ${mockPanelObj.state} • ${mockPanelObj.country}`}
        expand={false}
        onClick={() => console.log('clicked')}
      />
    )
  })
})
