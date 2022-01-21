import { render, screen } from '@testing-library/react'

import PlusInfoTable from '.'

describe('<PlusInfoTable />', () => {
  it('should render the component', () => {
    const { container } = render(<PlusInfoTable />)
  })
})
