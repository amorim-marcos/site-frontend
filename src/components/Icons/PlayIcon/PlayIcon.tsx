import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type PlayIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const PlayIcon = ({
  color = '#6aa353',
  height = '35',
  width = '35',
  onClick
}: PlayIconProps) => {
  return (
    <Box w={width} h={height} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35.951"
        height="35.951"
        viewBox="0 0 35.951 35.951"
      >
        <g id="play" transform="translate(-319.415 -61.694)">
          <g
            id="Grupo_234"
            data-name="Grupo 234"
            transform="translate(319.415 61.694)"
          >
            <path
              id="Caminho_227"
              data-name="Caminho 227"
              d="M337.39,97.645A17.976,17.976,0,1,1,355.366,79.67,17.995,17.995,0,0,1,337.39,97.645Zm0-33.359A15.383,15.383,0,1,0,352.774,79.67,15.4,15.4,0,0,0,337.39,64.287Z"
              transform="translate(-319.415 -61.694)"
              fill={color}
            />
          </g>
          <g
            id="Grupo_235"
            data-name="Grupo 235"
            transform="translate(332.17 70.459)"
          >
            <path
              id="Caminho_228"
              data-name="Caminho 228"
              d="M330.55,86.877a1.3,1.3,0,0,1-1.3-1.3V69.752a1.3,1.3,0,0,1,2-1.086L343.41,76.58a1.3,1.3,0,0,1,0,2.173l-12.152,7.914A1.29,1.29,0,0,1,330.55,86.877Zm1.3-14.734V83.189l8.481-5.522Z"
              transform="translate(-329.254 -68.456)"
              fill={color}
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
