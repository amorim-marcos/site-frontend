import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpers'
import PlusInfoTable from '.'

describe('<PlusInfoTable />', () => {
  it('should render the component', () => {
    renderWithTheme(<PlusInfoTable />)
  })

  it('should render the with mdf icon', () => {
    renderWithTheme(<PlusInfoTable />)
    expect(screen.getByLabelText(/mdfIcon/i).parentElement).toBeTruthy()
  })

  it('should render the with gota icon', () => {
    renderWithTheme(<PlusInfoTable />)
    expect(screen.getByLabelText(/gotaIcon/i).parentElement).toBeTruthy()
  })
})
