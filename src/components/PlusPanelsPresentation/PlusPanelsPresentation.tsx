import { Flex, Box, Text, Link } from '@chakra-ui/react'
import { PanelProduct, PanelProductProps } from './PanelProduct/PanelProduct'

export type PlusPanelsPresentationProps = {
  products?: {
    first: PanelProductProps
    second: PanelProductProps
    third: PanelProductProps
  }
  title?: string
}
export const PlusPanelsPresentation = ({
  products,
  title
}: PlusPanelsPresentationProps) => {
  return (
    <Box
      aria-label="PlusPanelPrensentationContainer"
      maxWidth="1536px"
      marginX="auto"
      padding="5%"
    >
      <Text as={"h3"}
          variant={"h3"}
          color="green.900"
          fontWeight={'extrabold'}
        >{title}</Text>
      <Flex
        marginTop={{
          base: '20px',
          sm: '30px',
          md: '40px',
          lg: '50px',
          xl: '60px',
          '2xl': '80px'
        }}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        {products && (
          <>
            <PanelProduct {...products.first} />

            <PanelProduct {...products.second} />

            <PanelProduct {...products.third} />
          </>
        )}
      </Flex>
    </Box>
  )
}
