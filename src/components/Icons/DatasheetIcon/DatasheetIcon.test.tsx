import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import DatasheetIcon from '.'

describe('<DatasheetIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<DatasheetIcon />)

    expect(screen.getByLabelText(/datasheetIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
