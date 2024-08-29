import { render, screen } from '@testing-library/react'

import UrlCopyIcon from '.'

describe('<UrlCopyIcon />', () => {
  it('should render the component', () => {
    const { container } = render(<UrlCopyIcon />)
  })
})
