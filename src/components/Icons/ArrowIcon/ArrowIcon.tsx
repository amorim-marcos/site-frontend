import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type ArrowIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
  hoverStroke?: string
}
export const ArrowIcon = ({
  onClick,
  width = '30px',
  stroke = 'white',
  hoverStroke = 'grey.300'
}: ArrowIconProps) => {
  return (
    <Box
      color={stroke}
      _hover={{ color: hoverStroke }}
      onClick={onClick}
      width={width}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 29.459 40.939"
        aria-label="arrowIcon"
      >
        <path
          id="seta"
          d="M0,0,16.015,20.469,0,40.938H13.443L29.458,20.469h0L13.443,0Z"
          transform="translate(0 0)"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}
