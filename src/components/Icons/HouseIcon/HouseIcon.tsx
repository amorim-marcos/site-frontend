import { Box, BoxProps } from '@chakra-ui/react'

export const HouseIcon = ({ width = '75px', ...props }: BoxProps) => {
  return (
    <Box w={width} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 26.768 23.391"
      >
        <g id="casinha" transform="translate(-4 -5)">
          <g
            id="Grupo_135"
            data-name="Grupo 135"
            transform="translate(8.314 17.381)"
          >
            <path
              id="Caminho_107"
              data-name="Caminho 107"
              d="M446.482,140.364H430.348a1,1,0,0,1-1-1v-9a1,1,0,1,1,2.007,0v8h14.127v-8a1,1,0,1,1,2.007,0v9A1,1,0,0,1,446.482,140.364Z"
              transform="translate(-429.345 -129.354)"
              fill="currentColor"
            />
          </g>
          <g id="Grupo_136" data-name="Grupo 136" transform="translate(4 5)">
            <path
              id="Caminho_108"
              data-name="Caminho 108"
              d="M451.884,134.487a1,1,0,0,1-.709-.294L439.5,122.522l-11.671,11.671a1,1,0,1,1-1.419-1.418L438.8,120.393a1,1,0,0,1,1.418,0l12.381,12.381a1,1,0,0,1-.71,1.712Z"
              transform="translate(-426.12 -120.099)"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
