import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type SeedingProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const Seeding = ({
  color = '#6DB416',
  height = '21px',
  width = '21px',
  ...props
}: SeedingProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 38.075 42.356"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Retângulo_1491"
              data-name="Retângulo 1491"
              width="38.075"
              height="42.356"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="plantadas" transform="translate(0 0)">
          <g
            id="Grupo_2239"
            data-name="Grupo 2239"
            transform="translate(0 0)"
            clipPath="url(#clip-path)"
          >
            <path
              id="Caminho_3046"
              data-name="Caminho 3046"
              d="M38.074,1.462A1.3,1.3,0,0,0,36.988.213c-.356-.058-8.691-1.352-13.933,3.2a14.249,14.249,0,0,0-4.018,6.436,14.237,14.237,0,0,0-4.018-6.436C9.776-1.139,1.442.157,1.087.213A1.293,1.293,0,0,0,0,1.462c-.008.357-.128,8.792,5.113,13.35,3.3,2.865,7.818,3.415,10.806,3.415.616,0,1.162-.023,1.623-.054v8.514a1.294,1.294,0,0,0,2.588,0V18.142c.529.045,1.215.085,2.021.085,2.988,0,7.511-.55,10.806-3.415C38.2,10.255,38.081,1.82,38.074,1.462M6.812,12.859C3.506,9.984,2.786,4.9,2.631,2.649,4.882,2.483,10,2.486,13.321,5.371S17.348,13.324,17.5,15.58c-2.253.163-7.371.163-10.69-2.722m24.449,0c-3.305,2.874-8.429,2.886-10.69,2.719.155-2.257.875-7.333,4.183-10.207s8.433-2.883,10.688-2.719c-.155,2.256-.875,7.333-4.181,10.207"
              transform="translate(0 0)"
              fill="#75ab17"
            />
            <path
              id="Caminho_3047"
              data-name="Caminho 3047"
              d="M32.09,36.3a.841.841,0,0,1-.841-.841,13.184,13.184,0,1,0-26.368,0,.842.842,0,0,1-1.684,0,14.867,14.867,0,1,1,29.734,0,.841.841,0,0,1-.841.841"
              transform="translate(0.94 6.056)"
              fill="#d7deb8"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
