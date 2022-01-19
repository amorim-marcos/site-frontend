import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import ProductDimensions from '.'

describe('<Product />', () => {
  it('should render the component', () => {
    renderWithTheme(
      <ProductDimensions
        dimensions={{ thickness: '', width: '', length: '' }}
      />
    )
  })
})
