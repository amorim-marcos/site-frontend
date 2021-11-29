import styled from 'styled-components'
import colors from 'styles/colors'
import { align } from 'styles/erix'

export const Wrapper = styled.main`
  width: 100%;
  height: 5rem;
  background: ${colors.berneck_green_light};

  ${align['row-middle-left']}

  padding-left: 10rem;
`

export const Tail = styled.h1`
  color: ${colors.white};
  font-size: 1.8rem;
`
