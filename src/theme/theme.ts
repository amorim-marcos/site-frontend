import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Button } from './variants/button'
import { Heading } from './variants/heading'
import { Text } from './variants/text'
import { NavLink } from './variants/nav-link'
import { global } from './global'
import { fontWeights } from './fontweight'
import { breakPoints } from './breakpoints'

export const theme = extendTheme({
  grid:{
    container: '130rem',
    gutter: '3.2rem'
  },
  colors,
  fontWeights,
  breakPoints,
  components: {
    Button,
    Heading,
    Text,
    NavLink
  },
  styles: {
    global
  },
  fonts: {
    heading: '"Montserrat" , sans-serif',
    body: '"Montserrat" , sans-serif'
  }
})
