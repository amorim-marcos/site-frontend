import styled from 'styled-components'
import NextLink from 'next/link'

export const Container = styled.header`
  padding: 5rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
`
export const Menu = styled.div`
  display: flex;
`

export const Link = styled(NextLink)``

export const Card = styled.div`
  cursor: pointer;
  margin-right: 1rem;
`

export const PageTitle = styled.h2``
