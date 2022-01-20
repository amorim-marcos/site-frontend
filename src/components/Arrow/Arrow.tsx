import { Box, BoxProps } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type ArrowProps = BoxProps & {
  width: number | ResponsiveCss
  height: number | ResponsiveCss
  color?: ResponsiveCss
  direction?: 'right' | 'left' | 'up' | 'down'
}

const ArrowRight = () => {
  return (
    <svg
      data-testid="arrow_right"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 21.871 30.394"
    >
      <path
        id="arrow_right"
        d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z"
        transform="translate(0 0)"
        fill="currentColor"
      />
    </svg>
  )
}

const ArrowLeft = () => {
  return (
    <svg
      data-testid="arrow_left"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 21.871 30.394"
    >
      <path
        id="arrow_left"
        d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z"
        transform="translate(21.871 30.394) rotate(180)"
        fill="currentColor"
      />
    </svg>
  )
}

const ArrowDown = () => {
  return (
    <svg
      data-testid="arrow_down"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 30 21"
    >
      <path
        id="arrow_down"
        d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z"
        transform="translate(30 -1) rotate(90)"
        fill="currentColor"
      />
    </svg>
  )
}

const ArrowUp = () => {
  return (
    <svg
      data-testid="arrow_up"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 31 21"
    >
      <path
        id="arrow_up"
        d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z"
        transform="translate(0 21) rotate(270)"
        fill="currentColor"
      />
    </svg>
  )
}

function renderArrowDirection(direction: string) {
  switch (direction) {
    case 'right':
      return <ArrowRight />
    case 'left':
      return <ArrowLeft />
    case 'up':
      return <ArrowUp />
    case 'down':
      return <ArrowDown />
  }
}

export const Arrow = ({
  width,
  height,
  color,
  direction = 'right',
  ...props
}: ArrowProps) => {
  return (
    <Box
      color={color ? color : 'inherit'}
      width={width}
      height={height}
      {...props}
    >
      {renderArrowDirection(direction)}
    </Box>
  )
}
