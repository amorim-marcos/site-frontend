import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import SectionPackBpDownloads from '.'

describe('<SectionPackBpDownloads />', () => {
  it('should render the component', () => {
    renderWithTheme(<SectionPackBpDownloads />)
  })
})
