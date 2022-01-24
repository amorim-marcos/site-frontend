import { render, screen } from '@testing-library/react'

import TecaInfo from '.'

describe('<TecaInfo />', () => {
  it('should render the component', () => {
    const { container } = render(<TecaInfo />)
  })
})
