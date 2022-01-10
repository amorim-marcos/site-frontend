import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { ResponsiveCss } from 'types/responsive'

export type ReportsIconProps = {
  stroke1?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const ReportsIcon = ({
  stroke1 = '#59993f',
  height = '47px',
  width = '67px',
  onClick
  }: ReportsIconProps) => {
  return (
    <Box w={width} h={height}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 32.718 35.951"
        data-testid="reports-icon"
      >
        <g id="relatórios" transform="translate(0 0)">
          <g id="Grupo_240" data-name="Grupo 240" transform="translate(8.127 13.08)">
            <g id="Grupo_237" data-name="Grupo 237" transform="translate(0 6.818)">
              <path id="Caminho_229" data-name="Caminho 229" d="M393.624,74.654H378.453a.647.647,0,0,0,0,1.293h15.171a.647.647,0,0,0,0-1.293Z" transform="translate(-377.806 -74.654)" fill={stroke1}/>
            </g>
            <g id="Grupo_238" data-name="Grupo 238" transform="translate(0 9.635)">
              <path id="Caminho_230" data-name="Caminho 230" d="M393.624,70.929H378.453a.647.647,0,0,0,0,1.293h15.171a.647.647,0,0,0,0-1.293Z" transform="translate(-377.806 -68.929)" fill={stroke1}/>
            </g>
            <g id="Grupo_239" data-name="Grupo 239" transform="translate(0 2)">
              <path id="Caminho_231" data-name="Caminho 231" d="M386.649,78.38h-8.2a.647.647,0,0,0,0,1.293h8.2a.647.647,0,1,0,0-1.293Z" transform="translate(-377.806 -78.38)" fill={stroke1}/>
            </g>
          </g>
          <g id="Grupo_241" data-name="Grupo 241" transform="translate(0 0)">
            <path id="Caminho_232" data-name="Caminho 232" d="M392.228,61.694H372.814a1.294,1.294,0,0,0-1.293,1.293V96.352a1.294,1.294,0,0,0,1.293,1.293h30.132a1.293,1.293,0,0,0,1.293-1.293V73.7a1.292,1.292,0,0,0-.379-.914L393.143,62.073A1.29,1.29,0,0,0,392.228,61.694ZM374.107,64.28h17.586l9.96,9.96V95.059H374.107Z" transform="translate(-371.521 -61.694)" fill={stroke1}/>
          </g>
          <g id="Grupo_242" data-name="Grupo 242" transform="translate(19.414 0)">
            <path id="Caminho_233" data-name="Caminho 233" d="M387.827,79.208a1.294,1.294,0,0,0-1.293,1.293V91.218a1.293,1.293,0,0,0,1.293,1.293h10.718a1.293,1.293,0,1,0,0-2.586H389.12V80.5A1.294,1.294,0,0,0,387.827,79.208Z" transform="translate(-386.534 -79.208)" fill={stroke1}/>
          </g>
        </g>
      </svg>

    </Box>
  )
}
