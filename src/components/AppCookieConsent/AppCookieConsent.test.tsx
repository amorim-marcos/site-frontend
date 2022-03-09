import { render, screen } from '@testing-library/react'

import AppCookieConsent from '.'

describe('<AppCookieConsent />', () => {
  it('should render the component', () => {
    const { container } = render(<AppCookieConsent />)
  })
})
