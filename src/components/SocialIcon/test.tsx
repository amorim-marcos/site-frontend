import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import SocialIcon from '.'

describe('<SocialIcon />', () => {
  it('should render facebook icon', () => {
    renderWithTheme(<SocialIcon media="facebook" />)

    expect(screen.getByLabelText('facebook-icon')).toBeTruthy()
  })

  it('should render instagram icon', () => {
    renderWithTheme(<SocialIcon media="instagram" />)

    expect(screen.getByLabelText('instagram-icon')).toBeTruthy()
  })

  it('should render youtube icon', () => {
    renderWithTheme(<SocialIcon media="youtube" />)

    expect(screen.getByLabelText('youtube-icon')).toBeTruthy()
  })

  it('should render pinterest icon', () => {
    renderWithTheme(<SocialIcon media="pinterest" />)

    expect(screen.getByLabelText('pinterest-icon')).toBeTruthy()
  })

  it('should render linkedin icon', () => {
    renderWithTheme(<SocialIcon media="linkedin" />)

    expect(screen.getByLabelText('linkedin-icon')).toBeTruthy()
  })
})
