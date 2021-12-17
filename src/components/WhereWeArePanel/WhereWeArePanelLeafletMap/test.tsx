import { render } from '@testing-library/react'

import WhereWeArePanelLeaflet from '.'

describe('<WhereWeArePanelLeaflet />', () => {
  it('should render the heading', () => {
    render(<WhereWeArePanelLeaflet />)
  })
})
