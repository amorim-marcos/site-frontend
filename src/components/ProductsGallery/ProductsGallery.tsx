import { Box } from '@chakra-ui/react'

import BannerProducts from '@components/BannerProducts'
import { BannerProductsProps } from '@components/BannerProducts/BannerProducts'
import {
  CarouselMultiElements,
  CarouselMultiElementsProps
} from '@components/CarouselMultiElements/CarouselMultiElements'

export type ProductsGalleryProps = {
  products: BannerProductsProps[]
  numberEvidence: number
}
export const ProductsGallery = ({
  products,
  numberEvidence
}: ProductsGalleryProps) => {
  return products.length > 1 ? (
    <CarouselMultiElements numberOfEvidenceElements={numberEvidence}>
      {products.map((p) => {
        return (
          <Box
            key={p.title}
            h={{
              base: '535px',
              sm: '655px',
              md: '316px',
              lg: '403px',
              xl: '520px',
              '2xl': '650px'
            }}
          >
            <BannerProducts
              title={p.title}
              titleColor={p.titleColor}
              subtitle={p.subtitle}
              subtitleColor={p.subtitleColor}
              bgColor={p.bgColor}
              srcImg={p.srcImg}
              onClick={p.onClick}
              bannerSize={p.bannerSize}
            />
          </Box>
        )
      })}
    </CarouselMultiElements>
  ) : (
    <h1>products missing</h1>
  )
}
