import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type BigGridIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const BigGridIcon = ({
  color = 'gray.100',
  height = '33px',
  width = '33px',
  ...props
}: BigGridIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 33 33"
      >
        <g id="grande" transform="translate(0 -0.106)">
          <rect
            id="Retângulo_147"
            data-name="Retângulo 147"
            width="33"
            height="33"
            rx="3"
            transform="translate(0 0.106)"
            fill="currentColor"
          />
        </g>
      </svg>
    </Box>
  )
}
