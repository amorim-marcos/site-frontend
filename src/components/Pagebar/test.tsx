import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import Pagebar from '.'

describe('<Pagebar />', () => {
  it('should render a container with max width of 1536px', () => {
    renderWithTheme(<Pagebar />)
    expect(screen.getByLabelText('pagebar-container')).toHaveStyle({
      maxWidth: '1536px'
    })
  })

  it('should render the house icon', () => {
    renderWithTheme(<Pagebar />)
    expect(screen.getByLabelText(/house-icon/i).parentElement).toBeTruthy()
  })

  it('should render the pagebar grafism', () => {
    renderWithTheme(<Pagebar />)
    expect(screen.getByLabelText(/pagebar-grafism/i).parentElement).toBeTruthy()
  })
})
