import { Box, BoxProps, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type FiltersIconProps = BoxProps & {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const FiltersIcon = ({
  color = 'green.500',
  height = '22px',
  width = '22px',
  ...props
}: FiltersIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.448 23.71">
        <g id="filtro" transform="translate(-1077.793 -1250.698)">
          <path id="Caminho_138" data-name="Caminho 138" d="M1376.772,1250.7v5.722h1.979V1250.7" transform="translate(-281.046)" fill="currentColor"/>
          <path id="Caminho_139" data-name="Caminho 139" d="M1248.411,1250.7v15.417h1.979V1250.7" transform="translate(-160.384)" fill="currentColor"/>
          <path id="Caminho_140" data-name="Caminho 140" d="M1206.153,1540.969v1.979h2.535v3.33a.99.99,0,1,0,1.979,0v-3.33h2.535v-1.979Z" transform="translate(-120.661 -272.859)" fill="currentColor"/>
          <path id="Caminho_141" data-name="Caminho 141" d="M1120.051,1385.365a.99.99,0,0,0,1.979,0v-15.577h-1.979Z" transform="translate(-39.723 -111.946)" fill="currentColor"/>
          <path id="Caminho_142" data-name="Caminho 142" d="M1080.328,1250.7v3.169h-2.535v1.979l2.535.015h1.979l2.535-.015v-1.979h-2.535V1250.7" fill="currentColor"/>
          <path id="Caminho_143" data-name="Caminho 143" d="M1334.515,1379.354v1.979h2.535v13.024a.99.99,0,1,0,1.979,0v-13.024h2.535v-1.979Z" transform="translate(-241.323 -120.939)" fill="currentColor"/>
        </g>
      </svg>
    </Box>
  )
}
