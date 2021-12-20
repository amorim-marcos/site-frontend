import { Box, BoxProps} from "@chakra-ui/react"

export type ArrowProps = {
  width: number | string
  height: number | string
  color: string
  direction?: 'right' | 'left'
}

const ArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21.871 30.394">
      <path id="arrow_right" d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z" transform="translate(0 0)" fill="currentColor"/>
    </svg>
  )
}

const ArrowLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21.871 30.394">
      <path id="arrow_left" d="M0,0,11.89,15.2,0,30.394H9.981l11.89-15.2h0L9.981,0Z" transform="translate(21.871 30.394) rotate(180)" fill="currentColor"/>
    </svg>
  )
}

export const Arrow = ({ width, height, color, direction = "right", ...props}: ArrowProps) => {
  return (
    <Box
      color={color}
      width={width}
      height={height}
      {...props}
    >
      {(direction == 'right') ? <ArrowRight/> : <ArrowLeft/>}
    </Box>

  )
}
