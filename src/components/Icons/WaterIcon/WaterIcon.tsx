import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type WaterIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const WaterIcon = ({
  stroke1 = '#59993f',
  stroke2 = '#144835',
  height = '50',
  width = '30',
  onClick
}: WaterIconProps) => {
  return (
    <Box w={width} h={height}>
     <svg 
        height="100%"
        viewBox="0 0 32.985 48.772" 
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="water-icon"
    >
      <clipPath id="a">
        <path d="m469.406 853.962a16.493 16.493 0 0 1 -16.492-16.492c0-3.717 2.632-10.214 7.822-19.312 3.813-6.684 7.679-12.4 7.718-12.462a1.15 1.15 0 0 1 1.9 0c.039.057 3.9 5.778 7.718 12.462 5.19 9.1 7.822 15.6 7.822 19.312a16.493 16.493 0 0 1 -16.492 16.492zm0-45.54c-1.375 2.1-4.04 6.26-6.679 10.887-6.21 10.886-7.513 15.884-7.513 18.16a14.192 14.192 0 0 0 28.385 0c0-2.277-1.3-7.278-7.52-18.173-2.639-4.624-5.3-8.778-6.673-10.874z" transform="translate(1046.014 2638.16)"/></clipPath>
        <g clip-path="url(#a)" transform="translate(-1498.928 -3443.35)">
          <path d="m0 0h41v101h-41z" fill={stroke1} transform="translate(1495 3438)"/>
          <path d="m0 0h41v101h-41z" fill={stroke2} transform="translate(1495 3539)"/>
        </g>
     </svg>
    </Box>
  )
}
