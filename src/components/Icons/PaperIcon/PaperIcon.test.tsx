import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import PaperIcon from '.'

describe('<ArrowIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<PaperIcon />)

    expect(screen.getByLabelText(/paperIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
