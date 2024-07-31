import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type WaterIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const WaterIcon = ({
  stroke1 = '#59993f',
  stroke2 = '#144835',
  height = '50',
  width = '30',
  onClick
}: WaterIconProps) => {
  return (
    <Box w={width} h={height}>
      <svg height="100%" viewBox="0 0 46.239 68.37">
        <defs>
          <clipPath id="clip-path">
            <path
              id="Caminho_1390"
              data-name="Caminho 1390"
              d="M476.034,873.56a23.121,23.121,0,0,1-23.12-23.12c0-5.21,3.689-14.319,10.966-27.073,5.346-9.37,10.765-17.39,10.819-17.47a1.612,1.612,0,0,1,2.67,0c.054.08,5.473,8.1,10.819,17.47,7.276,12.754,10.966,21.863,10.966,27.073a23.121,23.121,0,0,1-23.12,23.12Zm0-63.84c-1.927,2.943-5.663,8.776-9.363,15.262-8.7,15.261-10.532,22.268-10.532,25.458a19.9,19.9,0,0,0,39.791,0c0-3.192-1.829-10.2-10.542-25.475C481.689,818.482,477.958,812.659,476.034,809.72Z"
              transform="translate(-452.914 -805.19)"
              fill="#75ab17"
            />
          </clipPath>
        </defs>
        <g id="Agua" transform="translate(0 0)" clipPath="url(#clip-path)">
          <g
            id="Grupo_1374"
            data-name="Grupo 1374"
            transform="translate(-5.507 -7.5)"
          >
            <rect
              id="Retângulo_939"
              data-name="Retângulo 939"
              width="57.476"
              height="141.586"
              fill={stroke1}
            />
            <rect
              id="Retângulo_940"
              data-name="Retângulo 940"
              width="57.476"
              height="141.586"
              transform="translate(0 141.586)"
              fill="#144835"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
