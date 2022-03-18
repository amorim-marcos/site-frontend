import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type DatasheetIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
}

export const DatasheetIcon = ({
  onClick,
  width = '33px',
  stroke = 'white'
}: DatasheetIconProps) => {
  return (
    <Box color={stroke} onClick={onClick} width={width}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 33.893 37.242"
        aria-label="datasheetIcon"
      >
        <g id="ficha_verde" data-name="ficha verde" transform="translate(0 0)">
          <g id="Grupo_241" data-name="Grupo 241" transform="translate(0 0)">
            <path
              id="Caminho_232"
              data-name="Caminho 232"
              d="M392.972,98.936H372.861a1.34,1.34,0,0,1-1.34-1.34V63.034a1.34,1.34,0,0,1,1.34-1.34h31.214a1.339,1.339,0,0,1,1.34,1.34V86.5a1.338,1.338,0,0,1-.393.947l-11.1,11.1A1.336,1.336,0,0,1,392.972,98.936ZM374.2,96.257h18.217l10.318-10.318V64.373H374.2Z"
              transform="translate(-371.521 -61.694)"
              fill="currentColor"
            />
          </g>
          <g
            id="Grupo_242"
            data-name="Grupo 242"
            transform="translate(20.111 23.462)"
          >
            <path
              id="Caminho_233"
              data-name="Caminho 233"
              d="M387.874,92.988a1.34,1.34,0,0,1-1.34-1.34v-11.1a1.339,1.339,0,0,1,1.34-1.34h11.1a1.34,1.34,0,1,1,0,2.679h-9.763v9.762A1.34,1.34,0,0,1,387.874,92.988Z"
              transform="translate(-386.534 -79.208)"
              fill="currentColor"
            />
          </g>
          <g
            id="Grupo_565"
            data-name="Grupo 565"
            transform="translate(-609.775 -397.808)"
          >
            <rect
              id="Retângulo_466"
              data-name="Retângulo 466"
              width="15.717"
              height="12.996"
              rx="0.065"
              transform="translate(618.863 406.16)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.32"
            />
            <line
              id="Linha_20"
              data-name="Linha 20"
              y2="12.672"
              transform="translate(624.102 406.16)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.32"
            />
            <line
              id="Linha_21"
              data-name="Linha 21"
              y2="12.423"
              transform="translate(629.341 406.16)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.32"
            />
            <line
              id="Linha_22"
              data-name="Linha 22"
              x2="15.717"
              transform="translate(618.863 410.492)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.32"
            />
            <line
              id="Linha_23"
              data-name="Linha 23"
              x1="14.944"
              transform="translate(619.435 414.824)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.32"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
