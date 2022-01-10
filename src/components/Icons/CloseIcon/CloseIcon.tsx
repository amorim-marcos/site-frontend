import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type CloseIconProps = {
  color?: string
  boxSize?: ResponsiveCss
  onClick?: () => void
}

export const CloseIcon = ({
  color = '#bbc4b9',
  boxSize = ['50'],
  onClick
}: CloseIconProps) => {
  return (
    <Box boxSize={boxSize} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.109"
        height="18.474"
        viewBox="0 0 18.109 18.474"
      >
        <g id="x" transform="translate(-1175.767 -160.84)">
          <line
            id="Linha_10"
            data-name="Linha 10"
            x1="13.867"
            y2="14.232"
            transform="translate(1177.888 162.961)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="3"
          />
          <line
            id="Linha_11"
            data-name="Linha 11"
            x2="13.867"
            y2="14.232"
            transform="translate(1177.888 162.961)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    </Box>
  )
}
