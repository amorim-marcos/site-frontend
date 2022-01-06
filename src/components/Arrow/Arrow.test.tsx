import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Box } from '@chakra-ui/react'

import Arrow from '.'

describe('<Arrow />', () => {
  it('should render right arrow as default', () => {
    renderWithTheme(<Arrow />)

    screen.getByTestId("arrow_right") // only pass if can find arrow right loaded as default. 
  })
  it('should render right arrow', () => {
    renderWithTheme(<Arrow direction='right' />)

    screen.getByTestId("arrow_right") // only pass if can find arrow right loaded as default. 
  })
  it('should render left arrow', () => {
    renderWithTheme(<Arrow direction='left' />)

    screen.getByTestId("arrow_left") // only pass if can find arrow right loaded as default. 
  })
  it('should render color passed as prop', () => {
    renderWithTheme(<Arrow color='red' direction='right' />)

    const svg = screen.getByTestId("arrow_right") // only pass if can find arrow right loaded as default. 

    expect(svg.parentElement).toHaveStyle({ color: 'red' })
  })
  it('should render with color inherited from parent', () => {
    renderWithTheme(<Box color='red'><Arrow direction='right' /></Box>)

    const svg = screen.getByTestId("arrow_right") // only pass if can find arrow right loaded as default. 

    expect(svg.parentElement).toHaveStyle({ color: 'inherit' })
  })
})
