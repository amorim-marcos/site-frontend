
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
        viewBox="0 0 25.751 49.729">
        <defs>
          <clipPath id="clip-path">
            <path id="Caminho_1389" 
              data-name="Caminho 1389" 
              d="M391.731,847.218a1.15,1.15,0,0,1-1.114-1.432l5.322-21.061h-6.394a1.15,1.15,0,0,1-1.122-1.4l5.6-24.936a1.15,1.15,0,0,1,1.122-.9H413a1.15,1.15,0,0,1,.961,1.782L403.929,814.53H413a1.15,1.15,0,0,1,.942,1.809l-21.263,30.388A1.15,1.15,0,0,1,391.731,847.218Zm-.75-24.793h6.434a1.15,1.15,0,0,1,1.115,1.432l-4.149,16.418,16.405-23.445H401.8a1.15,1.15,0,0,1-.961-1.782l10.027-15.259h-14.8Z" 
              transform="translate(798.005 2647.861)" 
              fill={stroke1}
            />
          </clipPath>
        </defs>
        <g id="energia" transform="translate(-1186.399 -3445.351)" clip-path="url(#clip-path)">
          <g id="Grupo_1373" data-name="Grupo 1373" transform="translate(47)">
            <rect 
              id="Retângulo_939" 
              data-name="Retângulo 939" 
              width="150%"
              height="150%"
              transform="translate(1132 3443)" 
              fill={stroke1} />
            <rect 
              id="Retângulo_940" 
              data-name="Retângulo 940" 
              width="150%"
              height="150%"
              transform="translate(1132 3544)" 
              fill={stroke2} 
            />
          </g>
        </g>
      </svg>
  </Box>
  )
}
