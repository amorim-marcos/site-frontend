import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { ResponsiveCss } from 'types/responsive'

export type EmissionIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const EmissionIcon = ({ 
  stroke1 = '#144835',
  stroke2 = '#59993f',
  height = '90px',
  width = '75px',
  onClick
 }: EmissionIconProps) => {
  return (
    <Box w={width} h={height}>
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 90.712 85.684"
        data-testid="emission-icon"
      >
        <g id="emissões" transform="translate(1 1)">
          <line id="Linha_37" data-name="Linha 37" y2="42.672" transform="translate(0 41.012)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_38" data-name="Linha 38" x1="88.712" transform="translate(0 83.684)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_39" data-name="Linha 39" y2="42.672" transform="translate(88.712 41.012)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_40" data-name="Linha 40" x1="88.712" transform="translate(0 41.012)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_41" data-name="Linha 41" y1="13.191" transform="translate(19.215 70.493)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_42" data-name="Linha 42" x1="50.281" transform="translate(19.215 70.493)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line id="Linha_43" data-name="Linha 43" y1="11.696" transform="translate(69.497 70.493)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Caminho_1382" data-name="Caminho 1382" d="M527.247,783.045H497.675V766.411l29.572,16.633Z" transform="translate(-497.675 -742.033)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Caminho_1383" data-name="Caminho 1383" d="M546.607,783.045H517.035V766.411l29.572,16.633Z" transform="translate(-487.467 -742.033)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Caminho_1384" data-name="Caminho 1384" d="M507.124,782.939V750.449h15.152v41.012" transform="translate(-492.693 -750.449)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Caminho_1385" data-name="Caminho 1385" d="M565.969,783.045H536.4V766.411l29.572,16.633Z" transform="translate(-477.257 -742.033)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path id="Caminho_1386" data-name="Caminho 1386" d="M526.357,779.136V757.059h15.152v30.6" transform="translate(-482.552 -746.965)" fill="none" stroke={stroke1} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <rect id="Retângulo_906" data-name="Retângulo 906" width="9.206" height="9.205" transform="translate(10.932 51.804)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
          <rect id="Retângulo_907" data-name="Retângulo 907" width="9.206" height="9.205" transform="translate(30.146 51.804)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
          <rect id="Retângulo_908" data-name="Retângulo 908" width="9.206" height="9.205" transform="translate(49.36 51.804)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
          <rect id="Retângulo_909" data-name="Retângulo 909" width="9.206" height="9.205" transform="translate(68.574 51.804)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
          <g id="Grupo_1362" data-name="Grupo 1362" transform="translate(66.773 4.218)">
            <path id="Caminho_1387" data-name="Caminho 1387" d="M556.845,754.436c-3.482-1.567-13.373-1.411-15.45-.741,1.938,3.714,1.5,7.054,4.817,11.374,4.522,5.877,14.454,2.491,14.454,2.491S563.857,757.593,556.845,754.436Z" transform="translate(-541.395 -753.211)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
          </g>
          <path id="Caminho_1388" data-name="Caminho 1388" d="M546.725,756.9c10.572,2.906,13.124,12.542,13.872,16.2" transform="translate(-471.811 -747.05)" fill="none" stroke={stroke2} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"/>
        </g>
      </svg>
    </Box>
  )
}
