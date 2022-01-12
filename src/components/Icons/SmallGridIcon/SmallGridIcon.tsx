import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type SmallGridIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const SmallGridIcon = ({
  color = 'grey.100',
  height = '33',
  width = '33',
  ...props
}: SmallGridIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 34 33">
        <g id="pequeno" transform="translate(-830 -401)">
          <rect id="Retângulo_152" data-name="Retângulo 152" width="10" height="10" rx="1" transform="translate(830 401)" fill="currentColor"/>
          <rect id="Retângulo_154" data-name="Retângulo 154" width="10" height="9" rx="1" transform="translate(830 413)" fill="currentColor"/>
          <rect id="Retângulo_158" data-name="Retângulo 158" width="10" height="10" rx="1" transform="translate(830 424)" fill="currentColor"/>
          <rect id="Retângulo_159" data-name="Retângulo 159" width="10" height="10" rx="1" transform="translate(842 401)" fill="currentColor"/>
          <rect id="Retângulo_160" data-name="Retângulo 160" width="10" height="9" rx="1" transform="translate(842 413)" fill="currentColor"/>
          <rect id="Retângulo_161" data-name="Retângulo 161" width="10" height="10" rx="1" transform="translate(842 424)" fill="currentColor"/>
          <rect id="Retângulo_162" data-name="Retângulo 162" width="10" height="10" rx="1" transform="translate(854 401)" fill="currentColor"/>
          <rect id="Retângulo_163" data-name="Retângulo 163" width="10" height="9" rx="1" transform="translate(854 413)" fill="currentColor"/>
          <rect id="Retângulo_164" data-name="Retângulo 164" width="10" height="10" rx="1" transform="translate(854 424)" fill="currentColor"/>
        </g>
      </svg>
    </Box>
  )
}
