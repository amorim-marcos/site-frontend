import { Box, BoxProps, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type AttentionIconProps =  BoxProps & {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const AttentionIcon = ({
  color = 'green.600',
  height = '27px',
  width = '27px',
  ...props
}: AttentionIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 27 27">
        <g id="attention-icon" data-name="attention-icon" transform="translate(-540 -661)">
          <circle id="Elipse_30" data-name="Elipse 30" cx="13.5" cy="13.5" r="13.5" transform="translate(540 661)" fill="#15bb00"/>
          <path id="Caminho_2537" data-name="Caminho 2537" d="M-2.128-16.1H2.151L1.438-5.589H-1.414ZM.011.184a2.181,2.181,0,0,1-1.575-.61A1.983,1.983,0,0,1-2.2-1.909,1.927,1.927,0,0,1-1.576-3.37,2.218,2.218,0,0,1,.011-3.956,2.218,2.218,0,0,1,1.6-3.37a1.927,1.927,0,0,1,.621,1.461A1.983,1.983,0,0,1,1.587-.426,2.181,2.181,0,0,1,.011.184Z" transform="translate(553.5 682.5)" fill="#fff"/>
        </g>
      </svg>
    </Box>
  )
}
