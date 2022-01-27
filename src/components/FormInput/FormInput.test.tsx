import { render, screen } from '@testing-library/react'

import FormInput from '.'

describe('<FormInput />', () => {
  it('should render the component', () => {
    const { container } = render(<FormInput />)
  })
})
