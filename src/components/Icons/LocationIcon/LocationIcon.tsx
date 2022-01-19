import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type LocationIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
}
export const LocationIcon = ({
  onClick,
  width = '24px',
  stroke = 'white'
}: LocationIconProps) => {
  return (
    <Box color={stroke} onClick={onClick} width={width}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 24.821 36.691"
        aria-label="locationIcon"
      >
        <g id="local" transform="translate(-392.358 -974.25)">
          <path
            id="Caminho_846"
            data-name="Caminho 846"
            d="M404.769,974.25a12.425,12.425,0,0,0-12.411,12.41,12.288,12.288,0,0,0,1.275,5.457,1.8,1.8,0,0,0,.089.192l9.974,18a1.222,1.222,0,0,0,1.072.634h.006a1.222,1.222,0,0,0,1.07-.629l9.981-18.007a1.1,1.1,0,0,0,.075-.16,12.408,12.408,0,0,0-11.131-17.9Zm8.879,16.909-.044.088-8.837,15.95-8.841-15.946a9.965,9.965,0,0,1,8.84-14.566h.012a9.959,9.959,0,0,1,8.87,14.474Z"
            fill="currentColor"
          />
          <path
            id="Caminho_847"
            data-name="Caminho 847"
            d="M399.064,986.729a5.5,5.5,0,0,0,4.5,4.847A5.507,5.507,0,0,1,399.064,986.729Z"
            fill="none"
          />
          <path
            id="Caminho_848"
            data-name="Caminho 848"
            d="M404.535,980.667a5.5,5.5,0,0,0-5.471,4.938,5.5,5.5,0,1,1,6.334,5.987,5.5,5.5,0,0,0-.863-10.925Z"
            fill="none"
          />
          <path
            id="Caminho_849"
            data-name="Caminho 849"
            d="M403.567,991.576a5.1,5.1,0,0,0,1.831.016,5.446,5.446,0,0,1-.863.075A5.512,5.512,0,0,1,403.567,991.576Z"
            fill="currentColor"
          />
          <path
            id="Caminho_850"
            data-name="Caminho 850"
            d="M399.064,985.6a5.462,5.462,0,0,0,0,1.124,5.462,5.462,0,0,1,0-1.124Z"
            fill="currentColor"
          />
          <path
            id="Caminho_851"
            data-name="Caminho 851"
            d="M410.035,986.167a5.474,5.474,0,1,0-5.5,5.5,5.446,5.446,0,0,0,.863-.075A5.5,5.5,0,0,0,410.035,986.167Zm-5.5,4.15a4.15,4.15,0,1,1,4.151-4.15A4.155,4.155,0,0,1,404.535,990.317Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </Box>
  )
}
