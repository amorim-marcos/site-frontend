import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import PlusTestInfo from '.'

describe('<PlusTestInfo />', () => {
  it('should render the component', () => {
    renderWithTheme(<PlusTestInfo />)
  })

  it('should render a component with max width of 1536px', () => {
    renderWithTheme(<PlusTestInfo />)
    expect(screen.getByLabelText(/plusTestinfoContainer/i)).toHaveStyle({
      maxWidth: '1536px'
    })
  })

  it('should render a component with margin auto horizontally', () => {
    renderWithTheme(<PlusTestInfo />)
    expect(screen.getByLabelText(/plusTestinfoContainer/i)).toHaveStyle({
      marginInlineEnd: 'auto',
      marginInlineStart: 'auto'
    })
  })
})
