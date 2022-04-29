import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type GrafismLeftProps = {
  stroke?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  opacity?: string
  transform?: string
}
export const GrafismLeft = ({
  stroke = '#75ab17',
  height = '550px',
  width = '414px',
  opacity = '0.749',
  transform = 'translate(0 0)'
}: GrafismLeftProps) => {
  return (
    <Box w={width} h={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 414.375 550.881"
      >
        <g
          id="Grupo_416"
          data-name="Grupo 416"
          transform={transform}
          opacity={opacity}
        >
          <path
            id="Caminho_341"
            data-name="Caminho 341"
            d="M465.419,1011.66H379.89L278,1149.994h85.529Z"
            transform="translate(-178.247 -599.113)"
            fill={stroke}
          />
          <path
            id="Caminho_342"
            data-name="Caminho 342"
            d="M465.419,1011.66H379.89L278,1149.994h85.529Z"
            transform="translate(-178.247 -599.113)"
            fill={stroke}
          />
          <path
            id="Caminho_343"
            data-name="Caminho 343"
            d="M247.575,1381.9l-83.733,113.682h85.529l40.969-55.622Z"
            transform="translate(124.035 -1357.245)"
            fill={stroke}
          />
          <path
            id="Caminho_344"
            data-name="Caminho 344"
            d="M247.575,1381.9l-83.733,113.682h85.529l40.969-55.622Z"
            transform="translate(124.035 -1357.245)"
            fill={stroke}
          />
          <path
            id="Caminho_345"
            data-name="Caminho 345"
            d="M505.395,1134.368,421.662,1248.05h85.529l40.969-55.622Z"
            transform="translate(-421.07 -833.901)"
            fill={stroke}
          />
          <path
            id="Caminho_346"
            data-name="Caminho 346"
            d="M505.395,1134.368,421.662,1248.05h85.529l40.969-55.622Z"
            transform="translate(-421.07 -833.901)"
            fill={stroke}
          />
          <path
            id="Caminho_347"
            data-name="Caminho 347"
            d="M505.926,1394.714l-83.733-113.682h85.529l40.969,55.622Z"
            transform="translate(-422.193 -1143.99)"
            fill={stroke}
          />
          <path
            id="Caminho_348"
            data-name="Caminho 348"
            d="M505.926,1394.714l-83.733-113.682h85.529l40.969,55.622Z"
            transform="translate(-422.193 -1143.99)"
            fill={stroke}
          />
          <path
            id="Caminho_349"
            data-name="Caminho 349"
            d="M248.207,1147.466l-83.733-113.682H250l40.969,55.622Z"
            transform="translate(122.698 -621.237)"
            fill={stroke}
          />
          <path
            id="Caminho_350"
            data-name="Caminho 350"
            d="M248.207,1147.466l-83.733-113.682H250l40.969,55.622Z"
            transform="translate(122.698 -621.237)"
            fill={stroke}
          />
          <path
            id="Caminho_351"
            data-name="Caminho 351"
            d="M362.895,1534.416l101.889-138.331h0v0h0L362.895,1257.751H277.366l101.89,138.332-101.89,138.333Z"
            transform="translate(-176.909 -1257.751)"
            fill={stroke}
          />
        </g>
      </svg>
    </Box>
  )
}
