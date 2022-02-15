import { render, screen } from '@testing-library/react'

import WhereBuyTable from '.'

describe('<WhereBuyTable />', () => {
  it('should render the component', () => {
    const { container } = render(<WhereBuyTable />)
  })
})
