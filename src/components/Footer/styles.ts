import styled from 'styled-components'
import colors from 'styles/colors'
import { align } from 'styles/erix'

export const Wrapper = styled.main`
  text-align: center;
  background: ${colors.berneck_green_dark};
  color: #f1f1f1;
  height: 40rem;

  ${align['row-top-left']}

  padding: 3rem;
`

export const Logo = styled.h1`
  font-size: 4rem;
`
