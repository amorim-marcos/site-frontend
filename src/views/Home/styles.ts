import styled from 'styled-components'
import { align } from 'theme/erix'

export const Wrapper = styled.main`
  width: 100%;

  padding: 3rem;
  text-align: center;
  display: flex;

  ${align['row-middle-center']}

  min-height: 30rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`
