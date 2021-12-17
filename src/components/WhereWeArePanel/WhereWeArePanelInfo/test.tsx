import { render } from '@testing-library/react'

import { mockPanelObj } from '@components/WhereWeAre/WhereWeAre'
import WhereWeArePanelInfo from '.'

describe('<WhereWeArePanelInfo />', () => {
  it('should render the heading', () => {
    render(<WhereWeArePanelInfo {...mockPanelObj.ourPlaceInformation} />)
  })
})
