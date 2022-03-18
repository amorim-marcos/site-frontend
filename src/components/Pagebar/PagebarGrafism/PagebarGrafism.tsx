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
        <g id="grafismo_breadbcrumbs" transform="translate(-0.001 -171.999)">
          <path
            id="seta"
            d="M.11.3V83.182H147.279l32.142-41.2h0v-.128h0L147.279.3Z"
            transform="translate(-0.109 171.699)"
            fill="#6aa353"
          />
          <path
            id="Caminho_106"
            data-name="Caminho 106"
            d="M88.136,41.5h0L57.638,83h-25.6l30.5-41.5L32.036,0h25.6l30.5,41.5h0Zm-62.006.27H.1L25.092,8.045l12.8,17.039Z"
            transform="translate(9.9 172)"
            fill="#8bb879"
          />
        </g>
      </svg>
    </Box>
  )
}
