import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type PagebarGrafismProps = {
  height?: ResponsiveCss
}

export const PagebarGrafism = ({ height = '83px' }: PagebarGrafismProps) => {
  return (
    <Box h={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 179.312 83"
        aria-label="pagebar-grafism"
      >
        <g
          id="Grupo_1885"
          data-name="Grupo 1885"
          transform="translate(-8567.001 13396)"
        >
          <path
            id="seta"
            d="M.11.3V83.182H147.279l32.142-41.2h0v-.128h0L147.279.3Z"
            transform="translate(8566.891 -13396.3)"
            fill="#6aa353"
            fillRule="evenodd"
          />
          <path
            id="Caminho_20229"
            data-name="Caminho 20229"
            d="M88.136,41.5h0L57.638,83h-25.6l30.5-41.5L32.036,0h25.6l30.5,41.5h0Zm-62.006.27H.1L25.092,8.045l12.8,17.039Z"
            transform="translate(8576.9 -13396)"
            fill="#8bb879"
            fillRule="evenodd"
          />
          <g
            id="Grupo_135"
            data-name="Grupo 135"
            transform="translate(8685.236 -13353.727)"
          >
            <path
              id="Caminho_107"
              data-name="Caminho 107"
              d="M450.145,142.717H430.563a1.218,1.218,0,0,1-1.218-1.218V130.572a1.218,1.218,0,0,1,2.436,0v9.71h17.147v-9.71a1.218,1.218,0,0,1,2.436,0V141.5A1.218,1.218,0,0,1,450.145,142.717Z"
              transform="translate(-429.345 -129.354)"
              fill="#f5f6f4"
            />
          </g>
          <g
            id="Grupo_136"
            data-name="Grupo 136"
            transform="translate(8680 -13368.754)"
          >
            <path
              id="Caminho_108"
              data-name="Caminho 108"
              d="M457.392,137.562a1.211,1.211,0,0,1-.861-.357l-14.166-14.165L428.2,137.2a1.218,1.218,0,1,1-1.723-1.721l15.028-15.028a1.216,1.216,0,0,1,1.721,0l15.028,15.028a1.218,1.218,0,0,1-.862,2.078Z"
              transform="translate(-426.12 -120.099)"
              fill="#f5f6f4"
            />
          </g>
          <rect
            id="Retângulo_223"
            data-name="Retângulo 223"
            width="34"
            height="34"
            transform="translate(8680 -13371)"
            fill="none"
          />
        </g>
      </svg>
    </Box>
  )
}
