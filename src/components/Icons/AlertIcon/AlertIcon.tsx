import { Box, BoxProps } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export interface AlertIconProps extends BoxProps {
  color?: string
  boxSize?: ResponsiveCss
  onClick?: () => void
}

export const AlertIcon = ({
  color = '#bbc4b9',
  boxSize = ['50'],
  onClick,
  ...rest
}: AlertIconProps) => {
  return (
    <Box boxSize={boxSize} onClick={onClick} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 37.955 34.193"
      >
        <g id="alerta" transform="translate(-943.849 -1365.754)">
          <g
            id="Grupo_790"
            data-name="Grupo 790"
            transform="translate(944.878 1366.754)"
          >
            <g id="Grupo_789" data-name="Grupo 789">
              <path
                id="Caminho_945"
                data-name="Caminho 945"
                d="M980.491,1395.68l-15.76-27.822a2.192,2.192,0,0,0-3.806,0l-15.76,27.822a2.182,2.182,0,0,0,1.9,3.267h31.519A2.194,2.194,0,0,0,980.491,1395.68Z"
                transform="translate(-944.878 -1366.754)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </g>
          <g
            id="Grupo_791"
            data-name="Grupo 791"
            transform="translate(960.412 1376.837)"
          >
            <path
              id="Caminho_946"
              data-name="Caminho 946"
              d="M969.63,1399.513a2.168,2.168,0,0,1-.692-1.623,2.106,2.106,0,0,1,.68-1.6,2.663,2.663,0,0,1,3.471,0,2.1,2.1,0,0,1,.678,1.6,2.161,2.161,0,0,1-.692,1.623,2.561,2.561,0,0,1-3.445,0Zm-.617-17.142h4.68l-.78,11.5h-3.12Z"
              transform="translate(-968.938 -1382.371)"
              fill={color}
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
