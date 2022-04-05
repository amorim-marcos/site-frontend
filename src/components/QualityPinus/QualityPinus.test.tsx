import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'

import QualityPinus from '.'

describe('<QualityPinus />', () => {
  it('should render the component', () => {
    renderWithTheme(<QualityPinus items={[]} />)
  })

  it('should render a component with max width of 1536px', () => {
    renderWithTheme(<QualityPinus items={[]} />)
    expect(screen.getByLabelText(/qualityPinusContainer/i)).toHaveStyle({
      maxWidth: '1536px'
    })
  })

  it('should render a component with margin auto horizontally', () => {
    renderWithTheme(<QualityPinus items={[]} />)
    expect(screen.getByLabelText(/qualityPinusContainer/i)).toHaveStyle({
      marginInlineEnd: 'auto',
      marginInlineStart: 'auto'
    })
  })
})
