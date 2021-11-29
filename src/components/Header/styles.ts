import styled from 'styled-components'
import NextLink from 'next/link'
import colors from '../../styles/colors'
import { align } from 'styles/erix'

export const Container = styled.header`
  width: 100%;
  border-bottom: 0.5rem solid ${colors.berneck_green_dark};
`

export const TopBar = styled.div`
  height: 2.5rem;
  background: ${colors.berneck_green_dark};
`
export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
`
export const Menu = styled.div`
  height: 10rem;

  ${align['row-middle-center']}
`

export const MenuWrapper = styled.div`
  background: ${colors.berneck_green};
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 13rem;
`

export const Logo = styled.h1`
  color: ${colors.white};
  font-size: 4rem;
`

export const Link = styled(NextLink)`
  width: auto;
`

export const Card = styled.div`
  cursor: pointer;
  margin-right: 20px;
`

export const PageTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.white};
`
