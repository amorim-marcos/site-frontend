import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import Product from '.'

describe('<Product />', () => {
  it('should render the component', () => {
    renderWithTheme(<Product />)
  })

  // it('should render a component with max width of 1536px', () => {
  //   renderWithTheme(<Product />)
  //   expect(screen.getByLabelText(/productContainer/i)).toHaveStyle({
  //     maxWidth: '1536px'
  //   })
  // })

  it('should render a component with margin auto horizontally', () => {
    renderWithTheme(<Product />)
    expect(screen.getByLabelText(/productContainer/i)).toHaveStyle({
      marginInlineEnd: 'auto',
      marginInlineStart: 'auto'
    })
  })

  it('should render a product grafism', () => {
    renderWithTheme(<Product />)
    expect(screen.getByLabelText(/grafismProduct/i)).toBeTruthy()
  })
})
