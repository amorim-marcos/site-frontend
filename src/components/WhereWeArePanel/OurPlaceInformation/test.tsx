import { render, screen } from '@testing-library/react'
import { mockObject } from 'components/WhereWeAre/WhereWeAre'

import OurPlaceInformation from '.'

describe('<OurPlaceInformation />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <OurPlaceInformation {...mockObject.ourPlaceInformation} />
    )

    expect(
      screen.getByRole('heading', { name: /OurPlaceInformation/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
