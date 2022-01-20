import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'

import LocationIcon from '.'

describe('<LocationIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<LocationIcon />)
    expect(screen.getByLabelText(/locationIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
