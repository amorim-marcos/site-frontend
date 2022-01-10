import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import HouseIcon from '.'

describe('<HouseIcon />', () => {
  it('should a white icon by default', () => {
    renderWithTheme(<HouseIcon />)

    expect(screen.getByLabelText(/house-icon/i)).toHaveStyle({ color: 'white' })
  })
})
