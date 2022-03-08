import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type PaperIconProps = {
  stroke?: string
  onClick?: () => void
  width?: ResponsiveCss
  hoverStroke?: string
  direction?: 'left' | 'right' | 'top' | 'down'
}

function getDirection(dir: 'left' | 'right' | 'top' | 'down') {
  switch (dir) {
    case 'left':
      return 'rotate(180deg)'
    case 'down':
      return 'rotate(90deg)'
    case 'top':
      return 'rotate(-90deg)'
    default:
      return 'rotate(0deg)'
  }
}
export const PaperIcon = ({
  onClick,
  width = '30px',
  stroke = 'white',
  hoverStroke = 'gray.300',
  direction = 'right'
}: PaperIconProps) => {
  return (
    <Box
      color={stroke}
      _hover={{ color: hoverStroke }}
      onClick={onClick}
      width={width}
      transform={getDirection(direction)}
    >
      <svg
        aria-label="PaperIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 32.718 35.951"
      >
        <g
          id="icon_politica"
          data-name="icon politica"
          transform="translate(-371.521 -61.694)"
        >
          <g
            id="Grupo_240"
            data-name="Grupo 240"
            transform="translate(379.648 73.636)"
          >
            <g
              id="Grupo_237"
              data-name="Grupo 237"
              transform="translate(0 4.817)"
            >
              <path
                id="Caminho_229"
                data-name="Caminho 229"
                d="M393.624,75.947H378.453a.647.647,0,0,1,0-1.293h15.171a.647.647,0,0,1,0,1.293Z"
                transform="translate(-377.806 -74.654)"
                fill="currentColor"
              />
            </g>
            <g id="Grupo_238" data-name="Grupo 238">
              <path
                id="Caminho_230"
                data-name="Caminho 230"
                d="M393.624,72.222H378.453a.647.647,0,0,1,0-1.293h15.171a.647.647,0,0,1,0,1.293Z"
                transform="translate(-377.806 -70.929)"
                fill="currentColor"
              />
            </g>
            <g
              id="Grupo_239"
              data-name="Grupo 239"
              transform="translate(0 9.635)"
            >
              <path
                id="Caminho_231"
                data-name="Caminho 231"
                d="M386.649,79.673h-8.2a.647.647,0,0,1,0-1.293h8.2a.647.647,0,1,1,0,1.293Z"
                transform="translate(-377.806 -78.38)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Grupo_241"
            data-name="Grupo 241"
            transform="translate(371.521 61.694)"
          >
            <path
              id="Caminho_232"
              data-name="Caminho 232"
              d="M392.228,97.645H372.814a1.294,1.294,0,0,1-1.293-1.293V62.987a1.294,1.294,0,0,1,1.293-1.293h30.132a1.293,1.293,0,0,1,1.293,1.293V85.635a1.292,1.292,0,0,1-.379.914L393.143,97.266A1.29,1.29,0,0,1,392.228,97.645Zm-18.121-2.586h17.586l9.96-9.96V64.28H374.107Z"
              transform="translate(-371.521 -61.694)"
              fill="currentColor"
            />
          </g>
          <g
            id="Grupo_242"
            data-name="Grupo 242"
            transform="translate(390.935 84.342)"
          >
            <path
              id="Caminho_233"
              data-name="Caminho 233"
              d="M387.827,92.511a1.294,1.294,0,0,1-1.293-1.293V80.5a1.293,1.293,0,0,1,1.293-1.293h10.718a1.293,1.293,0,1,1,0,2.586H389.12v9.423A1.294,1.294,0,0,1,387.827,92.511Z"
              transform="translate(-386.534 -79.208)"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
