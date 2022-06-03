import { Box, Image } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type MapIconProps = {
  primaryColor?: string
  secondaryColor?: string
  boxSize?: ResponsiveCss
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}

export const MapIcon = ({
  boxSize = ['35px'],
  height = '47px',
  width = '67px',
  onClick
}: MapIconProps) => {
  return (
    <Box
      marginBottom={'20px'}
      boxSize={boxSize}
      onClick={onClick}
      w={width}
      h={height}
    >
      <Image
        src="/img/estados.svg"
        width={'100%'}
        height="100%"
        objectFit={'contain'}
      />
    </Box>
  )
}
