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
              base: '400px',
              xs: '500px',
              sm: '655px',
              md: '350px',
              lg: '400px',
              xl: '420px',
              '2xl': '460px'
            }}
            // bg="black"
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
