import { render, screen } from '@testing-library/react'

import { mockPanelObj } from 'components/WhereWeAre/WhereWeAre'
import WhereWeArePanelInfo from '.'

describe('<WhereWeArePanelInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <WhereWeArePanelInfo {...mockPanelObj.ourPlaceInformation} />
    )
  })
})
