import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Button } from './components/button'
import { Heading } from './components/heading'
import { Text } from './components/text'
import { NavLink } from './components/nav-link'
import { global } from './global'

export const theme = extendTheme({
  colors,
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
