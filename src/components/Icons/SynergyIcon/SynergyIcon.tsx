import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { ResponsiveCss } from 'types/responsive'

export type SynergyIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const SynergyIcon = ({ 
  stroke1 = '#59993f',
  stroke2 = '#eee0c6',
  height = '100px',
  width = '100px',
  onClick
 }: SynergyIconProps) => {
  return (
    <Box w={width} h={height}>
     <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 82.411 90.41"
      data-testid="synergy-icon"
    >
      <g id="sinergia" transform="translate(-1108.837 -306.967)">
        <path id="Caminho_1287" data-name="Caminho 1287" d="M1170.382,316.054a14.271,14.271,0,0,0-6.036-10.848c-5.2-3.656-12.219-2.57-17.071,1.541l-1.262,1.069-1.264-1.07c-4.852-4.112-11.868-5.2-17.071-1.541a14.432,14.432,0,0,0-1.377,22.4l18.617,16.933a1.626,1.626,0,0,0,2.188,0l18.617-16.931A14.325,14.325,0,0,0,1170.382,316.054Z" transform="translate(4.03 5.995)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        <g id="Grupo_1232" data-name="Grupo 1232">
          <path id="Caminho_1288" data-name="Caminho 1288" d="M1166.256,368.618v-9a2.862,2.862,0,0,1,5.723,0v2.852m0,0V351.505a2.862,2.862,0,0,1,5.723,0v12m0-3.248V344.271a3.3,3.3,0,0,1,3.658-3.281,3.466,3.466,0,0,1,2.973,3.508v8.4M1168.9,378.117c9.384-7.319,12.991-10.8,14.461-16.575.174-.685.323-1.435.447-2.173a41.432,41.432,0,0,0,.533-6.9v-4.291a2.956,2.956,0,0,1,3.029-2.955h0a2.956,2.956,0,0,1,2.883,2.955v8.108a31.71,31.71,0,0,1-2.393,12.085l-1.3,3.162a29.549,29.549,0,0,1-7.952,10.738l-5.444,4.636a7.28,7.28,0,0,0-2.421,4.87v4.6H1155.3V385.913a5.812,5.812,0,0,1,.142-.97,17.386,17.386,0,0,1,4.659-8.66l11.727-13.52a3.6,3.6,0,0,1,5.394.115,3.732,3.732,0,0,1-.041,4.7l-8.285,10.544" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <g id="Grupo_1231" data-name="Grupo 1231">
            <path id="Caminho_1289" data-name="Caminho 1289" d="M1128.1,362.417v-2.851a2.862,2.862,0,1,1,5.723,0v9m-11.446-5.117v-12a2.862,2.862,0,1,1,5.723,0v10.967m-12.357-9.573v-8.4a3.468,3.468,0,0,1,2.974-3.508,3.3,3.3,0,0,1,3.657,3.282V360.2m8.811,17.864-8.286-10.545a3.732,3.732,0,0,1-.04-4.7,3.6,3.6,0,0,1,5.393-.114l11.728,13.52a17.4,17.4,0,0,1,4.659,8.659,5.915,5.915,0,0,1,.141.97v10.465h-15.436v-4.6a7.281,7.281,0,0,0-2.42-4.869l-5.445-4.637a29.541,29.541,0,0,1-7.952-10.738l-1.3-3.162a31.73,31.73,0,0,1-2.392-12.085v-8.108a2.956,2.956,0,0,1,2.882-2.954h0a2.954,2.954,0,0,1,3.029,2.954v4.292a41.42,41.42,0,0,0,.533,6.9c.125.739.273,1.488.448,2.174,1.469,5.771,5.077,9.256,14.461,16.575" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
        </g>
      </g>
    </svg>
    </Box>
  )
}
