import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type SunIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
}
export const SunIcon = ({
  color = 'grey.100',
  height = '21px',
  width = '21px',
  ...props
}: SunIconProps) => {
  return (
    <Box w={width} h={height} color={color} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21.267 21.268">
        <g id="sol" transform="translate(-301.073 -114.694)">
          <g id="Grupo_174" data-name="Grupo 174">
            <g id="Grupo_167" data-name="Grupo 167">
              <path id="Caminho_164" data-name="Caminho 164" d="M311.707,118.715a1,1,0,0,1-1-1v-2.021a1,1,0,0,1,2,0v2.021A1,1,0,0,1,311.707,118.715Z" fill="currentColor"/>
            </g>
            <g id="Grupo_168" data-name="Grupo 168">
              <path id="Caminho_165" data-name="Caminho 165" d="M307.9,119.735a1,1,0,0,1-.867-.5l-1.011-1.75a1,1,0,0,1,1.733-1l1.01,1.75a1,1,0,0,1-.865,1.5Z" fill="currentColor"/>
            </g>
            <g id="Grupo_169" data-name="Grupo 169">
              <path id="Caminho_166" data-name="Caminho 166" d="M305.112,122.521a1,1,0,0,1-.5-.133l-1.75-1.011a1,1,0,0,1,1-1.732l1.75,1.01a1,1,0,0,1-.5,1.866Z" fill="currentColor"/>
            </g>
            <g id="Grupo_170" data-name="Grupo 170">
              <path id="Caminho_167" data-name="Caminho 167" d="M304.093,126.328h-2.02a1,1,0,0,1,0-2h2.02a1,1,0,0,1,0,2Z" fill="currentColor"/>
            </g>
            <g id="Grupo_171" data-name="Grupo 171">
              <path id="Caminho_168" data-name="Caminho 168" d="M315.512,119.735a1,1,0,0,1-.865-1.5l1.01-1.75a1,1,0,0,1,1.733,1l-1.011,1.75A1,1,0,0,1,315.512,119.735Z" fill="currentColor"/>
            </g>
            <g id="Grupo_172" data-name="Grupo 172">
              <path id="Caminho_169" data-name="Caminho 169" d="M318.3,122.521a1,1,0,0,1-.5-1.866l1.75-1.01a1,1,0,0,1,1,1.732l-1.75,1.011A1,1,0,0,1,318.3,122.521Z" fill="currentColor"/>
            </g>
            <g id="Grupo_173" data-name="Grupo 173">
              <path id="Caminho_170" data-name="Caminho 170" d="M321.34,126.328h-2.02a1,1,0,0,1,0-2h2.02a1,1,0,0,1,0,2Z" fill="currentColor"/>
            </g>
          </g>
          <g id="Grupo_182" data-name="Grupo 182">
            <g id="Grupo_176" data-name="Grupo 176">
              <g id="Grupo_175" data-name="Grupo 175">
                <path id="Caminho_171" data-name="Caminho 171" d="M311.707,130.64a5.312,5.312,0,1,1,5.311-5.312A5.318,5.318,0,0,1,311.707,130.64Zm0-8.624a3.312,3.312,0,1,0,3.311,3.312A3.315,3.315,0,0,0,311.707,122.016Z" fill="currentColor"/>
              </g>
            </g>
            <g id="Grupo_177" data-name="Grupo 177">
              <path id="Caminho_172" data-name="Caminho 172" d="M311.707,135.962a1,1,0,0,1-1-1v-2.021a1,1,0,0,1,2,0v2.021A1,1,0,0,1,311.707,135.962Z" fill="currentColor"/>
            </g>
            <g id="Grupo_178" data-name="Grupo 178">
              <path id="Caminho_173" data-name="Caminho 173" d="M316.524,134.671a1,1,0,0,1-.867-.5l-1.01-1.75a1,1,0,1,1,1.732-1l1.011,1.75a1,1,0,0,1-.866,1.5Z" fill="currentColor"/>
            </g>
            <g id="Grupo_179" data-name="Grupo 179">
              <path id="Caminho_174" data-name="Caminho 174" d="M320.049,131.145a1,1,0,0,1-.5-.134L317.8,130a1,1,0,0,1,1-1.732l1.75,1.01a1,1,0,0,1-.5,1.866Z" fill="currentColor"/>
            </g>
            <g id="Grupo_180" data-name="Grupo 180">
              <path id="Caminho_175" data-name="Caminho 175" d="M306.889,134.671a1,1,0,0,1-.866-1.5l1.011-1.75a1,1,0,1,1,1.732,1l-1.01,1.75A1,1,0,0,1,306.889,134.671Z" fill="currentColor"/>
            </g>
            <g id="Grupo_181" data-name="Grupo 181">
              <path id="Caminho_176" data-name="Caminho 176" d="M303.364,131.145a1,1,0,0,1-.5-1.866l1.75-1.01a1,1,0,0,1,1,1.732l-1.75,1.01A.992.992,0,0,1,303.364,131.145Z" fill="currentColor"/>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  )
}
