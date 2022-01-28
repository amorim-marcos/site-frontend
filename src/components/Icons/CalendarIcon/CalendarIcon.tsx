import { Box, BoxProps } from '@chakra-ui/react'

export interface CalendarIconProps extends BoxProps {
  stroke1?: string
  stroke2?: string
}
export const CalendarIcon = ({
  stroke1 = '#75ab17',
  stroke2 = '#595959',
  ...rest
}: CalendarIconProps) => {
  return (
    <Box {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 30.568 28.781"
      >
        <g id="calendário" transform="translate(1 1)">
          <g id="Grupo_503" data-name="Grupo 503" transform="translate(0 0)">
            <rect
              id="Retângulo_402"
              data-name="Retângulo 402"
              width="28.568"
              height="24.208"
              transform="translate(0 2.573)"
              fill="none"
              stroke={stroke1}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              id="Linha_17"
              data-name="Linha 17"
              x2="28.568"
              transform="translate(0 9.106)"
              fill="none"
              stroke={stroke1}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g
              id="Grupo_502"
              data-name="Grupo 502"
              transform="translate(6.032)"
            >
              <line
                id="Linha_18"
                data-name="Linha 18"
                y2="4.353"
                fill="none"
                stroke={stroke1}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                id="Linha_19"
                data-name="Linha 19"
                y2="4.353"
                transform="translate(16.503)"
                fill="none"
                stroke={stroke1}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
            <rect
              id="Retângulo_403"
              data-name="Retângulo 403"
              width="5.07"
              height="3.671"
              transform="translate(3.542 13.154)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <rect
              id="Retângulo_404"
              data-name="Retângulo 404"
              width="5.07"
              height="3.671"
              transform="translate(11.749 13.154)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <rect
              id="Retângulo_405"
              data-name="Retângulo 405"
              width="5.07"
              height="3.671"
              transform="translate(19.956 13.154)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <rect
              id="Retângulo_406"
              data-name="Retângulo 406"
              width="5.07"
              height="3.671"
              transform="translate(3.542 19.089)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <rect
              id="Retângulo_407"
              data-name="Retângulo 407"
              width="5.07"
              height="3.671"
              transform="translate(11.749 19.089)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <rect
              id="Retângulo_408"
              data-name="Retângulo 408"
              width="5.07"
              height="3.671"
              transform="translate(19.956 19.089)"
              fill="none"
              stroke={stroke2}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
