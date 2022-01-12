
import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type EnergyIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const EnergyIcon = ({ 
  stroke1 = '#59993f',
  stroke2 = '#144835',
  height = '101px',
  width = '41px',
  onClick
}: EnergyIconProps) => {
  return (
    <Box w={width} h={height}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%"
        height="100%"
        viewBox="0 0 25.751 49.729"
        data-testid="energy-icon"
      >
        <clipPath id="a">
          <path d="m391.731 847.218a1.15 1.15 0 0 1 -1.114-1.432l5.322-21.061h-6.394a1.15 1.15 0 0 1 -1.122-1.4l5.6-24.936a1.15 1.15 0 0 1 1.122-.9h17.855a1.15 1.15 0 0 1 .961 1.782l-10.032 15.259h9.071a1.15 1.15 0 0 1 .942 1.809l-21.263 30.388a1.15 1.15 0 0 1 -.948.491zm-.75-24.793h6.434a1.15 1.15 0 0 1 1.115 1.432l-4.149 16.418 16.405-23.445h-8.986a1.15 1.15 0 0 1 -.961-1.782l10.027-15.259h-14.8z" transform="translate(798.005 2647.861)"/>
        </clipPath>
          <g clipPath="url(#a)" transform="translate(-1186.399 -3445.351)">
            <path d="m0 0h41v101h-41z" fill={stroke1} transform="translate(1179 3443)"/>
            <path d="m0 0h41v101h-41z" fill={stroke2} transform="translate(1179 3544)"/>
          </g>
      </svg>
  </Box>
  )
}
