import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type ArrowIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
  hoverStroke?: string
  direction?: 'left' | 'right' | 'top' | 'down'
}

function getDirection(dir: 'left' | 'right' | 'top' | 'down') {
  switch (dir) {
    case 'left':
      return 'rotate(180deg)'
    case 'down':
      return 'rotate(90deg)'
    case 'top':
      return 'rotate(-90deg)'
    default:
      return 'rotate(0deg)'
  }
}
export const ArrowIcon = ({
  onClick,
  width = '30px',
  stroke = 'white',
  hoverStroke = 'gray.300',
  direction = 'right'
}: ArrowIconProps) => {
  return (
    <Box
      color={stroke}
      _hover={{ color: hoverStroke }}
      onClick={onClick}
      width={width}
      transform={getDirection(direction)}
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
