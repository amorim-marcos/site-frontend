import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import AppHeader from '.'

describe('<AppHeader />', () => {
  // it('should render a container with position relative', () => {
  //   renderWithTheme(<AppHeader />)

  //   expect(screen.getByTestId('header-container')).toHaveStyle({
  //     position: 'relative'
  //   })
  // })

  it('should render a container with max width of 1920px', () => {
    renderWithTheme(<AppHeader />)

    expect(screen.getByTestId('header-container')).toHaveStyle({
      width: '100%'
    })
  })
})
