import styled from 'styled-components'
import { align } from 'theme/erix'

export const Wrapper = styled.main`
  width: 100%;
  height: 5rem;
  background: green;

  ${align['row-middle-left']}

  padding-left: 10rem;
`

export const Tail = styled.h1`
  color: #fff;
  font-size: 1.8rem;
`
