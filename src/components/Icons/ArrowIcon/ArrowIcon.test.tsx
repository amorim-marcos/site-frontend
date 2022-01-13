import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import ArrowIcon from '.'

describe('<ArrowIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<ArrowIcon />)

    expect(screen.getByLabelText(/arrowIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
