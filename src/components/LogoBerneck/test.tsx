import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import LogoBerneck from '.'

describe('<LogoBerneck />', () => {
  it('should render a white logo by default', () => {
    renderWithTheme(<LogoBerneck />)
    expect(screen.getByLabelText(/Berneck/i).parentElement).toHaveStyle({
      color: '#FFF'
    })
  })

  it('should render a specific color when specified', () => {
    renderWithTheme(<LogoBerneck color="tomato" />)
    expect(screen.getByLabelText(/Berneck/i).parentElement).toHaveStyle({
      color: 'tomato'
    })
  })
})
