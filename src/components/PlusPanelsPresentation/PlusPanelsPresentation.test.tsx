import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import PlusPanelsPresentation from '.'

describe('<PlusPanelsPresentation />', () => {
  it('should render the component', () => {
    renderWithTheme(<PlusPanelsPresentation />)
  })

  it('should render a component with max width of 1920px', () => {
    renderWithTheme(<PlusPanelsPresentation />)
    expect(
      screen.getByLabelText(/PlusPanelPrensentationContainer/i)
    ).toHaveStyle({ maxWidth: '1920px' })
  })

  it('should render a component with margin auto horizontally', () => {
    renderWithTheme(<PlusPanelsPresentation />)
    expect(
      screen.getByLabelText(/PlusPanelPrensentationContainer/i)
    ).toHaveStyle({ marginInlineEnd: 'auto', marginInlineStart: 'auto' })
  })
})
