import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type MoonIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const MoonIcon = ({
  color = 'grey.100',
  height = '18',
  width = '18',
  ...props
}: MoonIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 34 33">
        <g id="lua" transform="translate(-266.663 -116.121)">
          <path id="Caminho_177" data-name="Caminho 177" d="M276.341,134.536a9.678,9.678,0,0,1-4.382-18.307,1,1,0,0,1,1.389,1.247,8.043,8.043,0,0,0,10.375,10.375,1,1,0,0,1,1.246,1.388A9.64,9.64,0,0,1,276.341,134.536Zm-5.481-15.058a7.68,7.68,0,0,0,10.861,10.86c-.283.024-.567.037-.853.037a10.056,10.056,0,0,1-10.044-10.044C270.824,120.045,270.836,119.76,270.86,119.478Z" fill="currentColor"/>
        </g>
      </svg>
    </Box>
  )
}
