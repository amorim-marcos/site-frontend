import { Box } from '@chakra-ui/react'

import BannerProducts from '@components/BannerProducts'
import { BannerProductsProps } from '@components/BannerProducts/BannerProducts'
import { CarouselMultiElements } from '@components/CarouselMultiElements/CarouselMultiElements'
import { useRouter } from 'next/router'

export type ProductsGalleryProps = {
  products: BannerProductsProps[]
  numberEvidence: number
}
export const ProductsGallery = ({
  products,
  numberEvidence
}: ProductsGalleryProps) => {
  const router = useRouter()
  return products.length > 1 ? (
    <CarouselMultiElements numberOfEvidenceElements={numberEvidence}>
      {products.map((p, i) => {
        return (
          <Box
            key={i}
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
              onClick={() => router.push(`/products/${p.urlLink}`)}
              bannerSize={p.bannerSize}
              urlLink={p.urlLink}
            />
          </Box>
        )
      })}
    </CarouselMultiElements>
  ) : (
    <h1>products missing</h1>
  )
}
