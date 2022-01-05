import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'
export type ArrowIconProps = {
  width?: ResponsiveCss
  height?: ResponsiveCss
  color?: string
}
export const ArrowIcon = ({
  width = '10px',
  color = '#59993f',
  height = '6.5px'
}: ArrowIconProps) => {
  return (
    <Box width={width} height={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 10.858 6.225"
      >
        <path
          id="setinha"
          d="M356.505,92.455h10.858l-5.429,6.225Z"
          transform="translate(-356.505 -92.455)"
          fill={color}
        />
      </svg>
    </Box>
  )
}
