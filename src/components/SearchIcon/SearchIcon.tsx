import { Center } from '@chakra-ui/react'
import { ResponsiveCss } from '../../types/responsive'

export type SearchIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
  height?: ResponsiveCss
}
export const SearchIcon = ({
  stroke = '#f5f6f4',
  onClick,
  width = '35px',
  height = '23px'
}: SearchIconProps) => {
  return (
    <Center
      color={stroke}
      onClick={onClick}
      width={width}
      height={height}
      cursor="pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="39.268"
        viewBox="0 0 39.399 39.268"
        aria-label="Search-icon"
      >
        <g
          id="lupa_pesquisa"
          data-name="lupa pesquisa"
          transform="translate(-424.732 -62.012)"
        >
          <circle
            id="Elipse_1"
            data-name="Elipse 1"
            cx="12.29"
            cy="12.29"
            r="12.29"
            transform="translate(426.122 77.287) rotate(-34.397)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            id="Caminho_5"
            data-name="Caminho 5"
            d="M448.192,82.237l8.908,8.908a2.127,2.127,0,0,1,0,3l-.134.134a2.127,2.127,0,0,1-3,0l-8.908-8.908"
            transform="translate(5.221 5.193)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </Center>
  )
}
