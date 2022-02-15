import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type MidGridIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const MidGridIcon = ({
  color = 'gray.100',
  height = '33px',
  width = '33px',
  ...props
}: MidGridIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 33 33"
      >
        <g id="medio" transform="translate(0.521 -0.106)">
          <rect
            id="Retângulo_148"
            data-name="Retângulo 148"
            width="15"
            height="15"
            rx="2"
            transform="translate(-0.521 0.106)"
            fill="currentColor"
          />
          <rect
            id="Retângulo_149"
            data-name="Retângulo 149"
            width="15"
            height="15"
            rx="2"
            transform="translate(17.479 0.106)"
            fill="currentColor"
          />
          <rect
            id="Retângulo_150"
            data-name="Retângulo 150"
            width="15"
            height="15"
            rx="2"
            transform="translate(-0.521 18.106)"
            fill="currentColor"
          />
          <rect
            id="Retângulo_151"
            data-name="Retângulo 151"
            width="15"
            height="15"
            rx="2"
            transform="translate(17.479 18.106)"
            fill="currentColor"
          />
        </g>
      </svg>
    </Box>
  )
}
