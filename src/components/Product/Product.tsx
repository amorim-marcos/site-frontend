import { Box, Image } from '@chakra-ui/react'
import { GrafismProduct1 } from './GrafismProduct1/GrafismProduct1'
import { GrafismProduct2 } from './GrafismProduct2/GrafismProduct2'
import { ProductBody, ProductBodyProps } from './ProductBody/ProductBody'
import {
  ProductHeader,
  ProductHeaderProps
} from './ProductHeader/ProductHeader'

export type ProductProps = {
  header?: ProductHeaderProps
  body?: ProductBodyProps
  grafism?: '1' | '2'
}
export const Product = ({ header, body, grafism = '1' }: ProductProps) => {
  return (
    <Box overflow="hidden" position="relative" marginX="auto" maxWidth="1920px">
      {grafism === '1' ? (
        <Box position="absolute" top="-610px" right="-630px">
          <GrafismProduct1 />
        </Box>
      ) : (
        <Box position="absolute" top="-150px" right="-430px">
          <GrafismProduct2 />
        </Box>
      )}
      <Box position="absolute" top="130px" right="-400px">
        <Image src="/img/hdf_plus.png" alt="hdf image" width="1414px" />
        {/* <Image src="/img/hdf.png" alt="hdf image" width="1414px" /> */}
      </Box>
      <ProductHeader {...header} />
      <ProductBody {...body} />
    </Box>
  )
}
