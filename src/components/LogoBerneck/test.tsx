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

  it('should have a height of 40px by default', () => {
    renderWithTheme(<LogoBerneck />)
    expect(screen.getByLabelText(/Berneck/i).parentElement).toHaveStyle({
      height: '40px'
    })
  })

  it('should have a specific height when specified', () => {
    renderWithTheme(<LogoBerneck height="50" />)
    expect(screen.getByLabelText(/Berneck/i).parentElement).toHaveStyle({
      height: '50px'
    })
  })
})
