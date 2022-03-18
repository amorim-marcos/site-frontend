import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import AppFooter from '.'

describe('<AppFooter />', () => {
  it('should render a container with max width of 1920px', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText(/footer-container/i)).toHaveStyle({
      maxWidth: '1920px'
    })
  })

  it('should render the Berneck Logo', () => {
    renderWithTheme(<AppFooter />)
    expect(screen.getByLabelText(/Berneck/i).parentElement).toBeTruthy()
  })

  it('should render a facebook icon', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText('facebook-icon')).toBeTruthy()
  })

  it('should render a instagram icon', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText('instagram-icon')).toBeTruthy()
  })

  it('should render a youtube icon', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText('youtube-icon')).toBeTruthy()
  })

  it('should render a pinterest icon', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText('pinterest-icon')).toBeTruthy()
  })

  it('should render a linkedin icon', () => {
    renderWithTheme(<AppFooter />)

    expect(screen.getByLabelText('linkedin-icon')).toBeTruthy()
  })
})
