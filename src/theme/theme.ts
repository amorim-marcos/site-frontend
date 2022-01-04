import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Button } from './variants/button'
import { Heading } from './variants/heading'
import { Text } from './variants/text'
import { NavLink } from './variants/nav-link'
import { global } from './global'
import { fontWeights } from './fontweight'
<<<<<<< HEAD
import { fontSizes } from './fontsizes'
import { breakPoints } from './breakpoints'
=======
import { breakpoints } from './breakpoints'
>>>>>>> root/BNK-42

export const theme = extendTheme({
  grid:{
    container: '130rem',
    gutter: '3.2rem'
  },
  colors,
  fontWeights,
<<<<<<< HEAD
  fontSizes,
  breakPoints,
=======
  breakpoints,
>>>>>>> root/BNK-42
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
