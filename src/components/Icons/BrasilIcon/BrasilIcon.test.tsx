import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/test/helpers'
import { BrasilIcon } from './BrasilIcon'

describe('<ArrowIcon />', () => {
  it('should render a white icon by default', () => {
    renderWithTheme(<BrasilIcon />)

    expect(screen.getByLabelText(/BrasilIcon/i).parentElement).toHaveStyle({
      color: 'white'
    })
  })
})
