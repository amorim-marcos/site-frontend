import { render } from '@testing-library/react'

import LeafletMaps from '.'

describe('<LeafletMaps />', () => {
  it('should render the component', () => {
    render(<LeafletMaps zoom={13} center={[-25.5410047, -49.3861603]} />)
  })
})
