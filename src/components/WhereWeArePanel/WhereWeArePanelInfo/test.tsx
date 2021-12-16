import { render, screen } from '@testing-library/react'
import { mockObject } from 'components/WhereWeAre/WhereWeAre'

import WhereWeArePanelInfo from '.'

describe('<WhereWeArePanelInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <WhereWeArePanelInfo {...mockObject.ourPlaceInformation} />
    )

    expect(
      screen.getByRole('heading', { name: /WhereWeArePanelInfo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
