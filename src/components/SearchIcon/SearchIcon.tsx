import * as S from './styles'
import { Box, Center } from '@chakra-ui/react'

export type SearchIconProps = {
  stroke?: string
  onClick?: () => void
}
export const SearchIcon = ({
  stroke = '#f5f6f4',
  onClick
}: SearchIconProps) => {
  return (
    <Center onClick={onClick} h="100%" cursor="pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="34.963" height="34.84">
        <g
          data-name="lupa pesquisa"
          transform="translate(-424.732 -62.019)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <ellipse
            data-name="Elipse 1"
            cx="10.693"
            cy="10.695"
            rx="10.693"
            ry="10.695"
            transform="rotate(-34.397 335.008 -650.607)"
          />
          <path
            data-name="Caminho 5"
            d="M450.385 84.418h0l7.5 7.5a2.127 2.127 0 0 1 0 3l-.134.134a2.127 2.127 0 0 1-3 0l-7.7-7.7h0"
          />
        </g>
      </svg>
    </Center>
  )
}
