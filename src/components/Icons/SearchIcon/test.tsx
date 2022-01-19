import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import SearchIcon from '.'

describe('<SearchIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<SearchIcon />)
    expect(screen.getByLabelText(/Search-icon/i).parentElement).toHaveStyle({
      color: '#f5f6f4'
    })
  })
})
