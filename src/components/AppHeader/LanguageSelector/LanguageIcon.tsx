import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'
export type LanguageIconProps = {
  width?: ResponsiveCss
  color?: string
}
export const LanguageIcon = ({
  width = '25px',
  color = '#59993f'
}: LanguageIconProps) => {
  return (
    <Box width={width} height={width}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 25.849 25.886"
      >
        <g id="lingua" transform="translate(-316.526 -69.765)">
          <g
            id="Grupo_3"
            data-name="Grupo 3"
            transform="translate(317.026 70.303)"
          >
            <g id="Grupo_2" data-name="Grupo 2">
              <path
                id="Caminho_1"
                data-name="Caminho 1"
                d="M329.451,70.3a12.424,12.424,0,1,0,12.424,12.424A12.438,12.438,0,0,0,329.451,70.3Z"
                transform="translate(-317.026 -70.303)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <g id="Grupo_1" data-name="Grupo 1" transform="translate(2.569)">
                <path
                  id="Caminho_2"
                  data-name="Caminho 2"
                  d="M320.6,73.393s-2.045,2.48-1.368,5.057c.849,3.224,5.017,3.793,6.364,4.37.153.066.888.529.759,1-.15.549-1.275,1-1.036,1.892a9.062,9.062,0,0,0,1.19,1.232c.933.886.544,2.947-.4,4.536-.488.82.431,1.7,1.323.637a14.057,14.057,0,0,1,2.492-2.561c.959-.533,2.559-1.066,3.306-2.293s1.035-2.892-.107-3.04-1.547.533-1.973,0-.3-1.175-1.28-1.814a3.873,3.873,0,0,0-2.318-.475s-.6-.342-1.224-.777c-.871-.6-2.855-.994-2.774-1.828.061-.624.555-1.134,1.623-.762s2.02-1.032,2.4-2.24,1.828-.514,2.362-1.368-1.082-1.191-1.936-1.138-1.133-1.122-1.647-1c-.634.153-.964,1.083-1.808.839-.938-.271-.742-2.218.209-2.771"
                  transform="translate(-319.093 -70.161)"
                  fill="none"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  id="Caminho_3"
                  data-name="Caminho 3"
                  d="M333.607,72.694a6.888,6.888,0,0,0-.5,1.983c-.056,1.046.906.95,1.759,1.751s-.7,1.6-.4,3.367a2.883,2.883,0,0,0,2.08,2.24,4.014,4.014,0,0,0,1.362.113"
                  transform="translate(-315.697 -69.723)"
                  fill="none"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  id="Caminho_4"
                  data-name="Caminho 4"
                  d="M327.027,70.3a2.82,2.82,0,0,1,2.423,1.79c.127.452.435,1.482,1.287,1.652,1.088.22,2.65-1.418,1.225-2.42"
                  transform="translate(-317.17 -70.303)"
                  fill="none"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  )
}
