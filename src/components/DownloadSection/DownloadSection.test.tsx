import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import DownloadSection from '.'

describe('<DownloadSection />', () => {
  it('should render the component', () => {
    renderWithTheme(<DownloadSection grafism="type1" items={[]} />)
  })
})
