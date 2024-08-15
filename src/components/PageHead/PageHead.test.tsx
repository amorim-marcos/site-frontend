import { render } from '@testing-library/react'

import PageHead from '.'

describe('<PageHead />', () => {
  it('should render the component', () => {
    const { container } = render(<PageHead page_title="Berneck" />)
  })
})
