import { render, screen } from '@testing-library/react'

import ProductsGallery from '.'

describe('<ProductsGallery />', () => {
  it('should render the component', () => {
    const { container } = render(
      <ProductsGallery products={[]} numberEvidence={3} />
    )
  })
})
