import { render, screen } from '@testing-library/react'

import HomeBanner from '.'

describe('<HomeBanner />', () => {
  it('should render the component', () => {
    const { container } = render(<HomeBanner items={[]} />)
  })
})
