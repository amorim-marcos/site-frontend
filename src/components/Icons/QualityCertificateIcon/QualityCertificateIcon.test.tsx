import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import QualityCertificateIcon from '.'

describe('<QualityCertificateIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<QualityCertificateIcon />)

    expect(screen.getByLabelText(/qualityIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
