import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/theme/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

const ThemeDecorator = (Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
)

export const decorators = [ThemeDecorator]
