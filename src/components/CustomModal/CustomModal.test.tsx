import { render, screen } from '@testing-library/react'

import CustomModal from '.'

describe('<CustomModal />', () => {
  it('should render the component', () => {
    const { container } = render(<CustomModal />)
  })
})
