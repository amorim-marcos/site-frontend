import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { render, screen } from '@testing-library/react'

import WhereWeArePanelFooter from '.'

describe('<WhereWeArePanelFooter />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <WhereWeArePanelFooter
        {...mockObject}
        address={`${mockObject.city}, ${mockObject.state} • ${mockObject.country}`}
        expand={false}
        onClick={() => console.log('clicked')}
      />
    )

    expect(
      screen.getByRole('heading', { name: /WhereWeArePanelFooter/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
