import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type ZoomInIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const ZoomInIcon = ({
  color = '#8cb87b',
  height = '26',
  width = '26',
  onClick
}: ZoomInIconProps) => {
  return (
    <Box w={width} h={height} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.605"
        height="26.605"
        viewBox="0 0 26.605 26.605"
      >
        <g id="lupa" transform="translate(-284.442 -103.502)">
          <g
            id="Grupo_220"
            data-name="Grupo 220"
            transform="translate(284.442 103.502)"
          >
            <path
              id="Caminho_209"
              data-name="Caminho 209"
              d="M296.355,127.328a11.913,11.913,0,1,1,11.912-11.914A11.927,11.927,0,0,1,296.355,127.328Zm0-20.616a8.7,8.7,0,1,0,8.7,8.7A8.713,8.713,0,0,0,296.355,106.712Z"
              transform="translate(-284.442 -103.502)"
              fill={color}
            />
          </g>
          <g
            id="Grupo_221"
            data-name="Grupo 221"
            transform="translate(302.014 121.073)"
          >
            <path
              id="Caminho_210"
              data-name="Caminho 210"
              d="M308.293,128.957a1.6,1.6,0,0,1-1.135-.47l-5.823-5.824a1.6,1.6,0,0,1,2.27-2.27l5.823,5.824a1.6,1.6,0,0,1-1.134,2.739Z"
              transform="translate(-300.865 -119.924)"
              fill={color}
            />
          </g>
          <g
            id="Grupo_222"
            data-name="Grupo 222"
            transform="translate(294.75 109.718)"
          >
            <path
              id="Caminho_211"
              data-name="Caminho 211"
              d="M295.681,120.7a1.6,1.6,0,0,1-1.605-1.605v-8.183a1.605,1.605,0,1,1,3.21,0V119.1A1.6,1.6,0,0,1,295.681,120.7Z"
              transform="translate(-294.076 -109.311)"
              fill={color}
            />
          </g>
          <g
            id="Grupo_223"
            data-name="Grupo 223"
            transform="translate(290.658 113.809)"
          >
            <path
              id="Caminho_212"
              data-name="Caminho 212"
              d="M300.041,116.345h-8.185a1.605,1.605,0,0,1,0-3.21h8.185a1.605,1.605,0,1,1,0,3.21Z"
              transform="translate(-290.251 -113.135)"
              fill={color}
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
