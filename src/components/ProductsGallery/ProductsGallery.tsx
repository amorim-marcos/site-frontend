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
      {products &&
        products.map((p, i) => {
          return (
            <Box
              key={i}
              h={{
                base: '290px',
                xs: '400px',
                sm: '485px',
                md: '280px',
                lg: '400px',
                xl: '345px'
              }}
              paddingX={{ base: '20px', sm: '80px', md: '0' }}
              // bg="black"
            >
              <BannerProducts
                title={p.title}
                titleColor={p.titleColor}
                subtitle={p.subtitle}
                subtitleColor={p.subtitleColor}
                bgColor={p.bgColor}
                srcImg={p.srcImg}
                imgAltText={p.imgAltText}
                // onClick={() => router.push(`/products/${p.urlLink}`)}
                linkTo={`/products/${p.urlLink}`}
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
