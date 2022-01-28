import { render, screen } from '@testing-library/react'

import DownloadSection from '.'

describe('<DownloadSection />', () => {
  it('should render the component', () => {
    const { container } = render(<DownloadSection />)
  })
})
