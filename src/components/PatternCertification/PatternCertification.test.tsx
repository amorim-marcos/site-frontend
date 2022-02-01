import { render, screen } from '@testing-library/react'

import PatternCertification from '.'

describe('<PatternCertification />', () => {
  it('should render the component', () => {
    const { container } = render(<PatternCertification />)
  })
})
