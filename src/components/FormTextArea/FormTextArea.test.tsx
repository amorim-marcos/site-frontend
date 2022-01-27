import { render, screen } from '@testing-library/react'

import FormTextArea from '.'

describe('<FormTextArea />', () => {
  it('should render the component', () => {
    const { container } = render(<FormTextArea />)
  })
})
