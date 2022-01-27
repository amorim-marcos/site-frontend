import { render, screen } from '@testing-library/react'

import FormSelect from '.'

describe('<FormSelect />', () => {
  it('should render the component', () => {
    const { container } = render(<FormSelect />)
  })
})
