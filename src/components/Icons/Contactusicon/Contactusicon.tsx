import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { ResponsiveCss } from 'types/responsive'

export type ContactusiconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const Contactusicon = ({ 
  stroke1 = '#59993f',
  stroke2 = '#eee0c6',
  height = '50px',
  width = '30px',
  onClick
 }: ContactusiconProps) => {
  return (
    <Box w={width} h={height}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 85.978 78.922"
      >
        <g id="icon_fale_conosco" data-name="icon fale conosco" transform="translate(-697.763 -180.662)">
          <g id="Grupo_114" data-name="Grupo 114" transform="translate(716.404 193.12)">
            <g id="Grupo_111" data-name="Grupo 111" transform="translate(0 4.814)">
              <path id="Caminho_92" data-name="Caminho 92" d="M727.994,195.319H712.833a.646.646,0,1,1,0-1.292h15.161a.646.646,0,0,1,0,1.292Z" transform="translate(-712.187 -194.027)" fill="#eee0c6"/>
            </g>
            <g id="Grupo_112" data-name="Grupo 112">
              <path id="Caminho_93" data-name="Caminho 93" d="M727.994,191.594H712.833a.646.646,0,1,1,0-1.292h15.161a.646.646,0,0,1,0,1.292Z" transform="translate(-712.187 -190.302)" fill="#eee0c6"/>
            </g>
            <g id="Grupo_113" data-name="Grupo 113" transform="translate(0 9.628)">
              <path id="Caminho_94" data-name="Caminho 94" d="M721.023,199.044h-8.19a.646.646,0,1,1,0-1.292h8.19a.646.646,0,0,1,0,1.292Z" transform="translate(-712.187 -197.752)" fill="#eee0c6"/>
            </g>
          </g>
          <g id="Grupo_117" data-name="Grupo 117" transform="translate(755.046 232.044)">
            <g id="Grupo_115" data-name="Grupo 115">
              <path id="Caminho_95" data-name="Caminho 95" d="M757.894,221.712H742.733a.646.646,0,0,1,0-1.292h15.161a.646.646,0,0,1,0,1.292Z" transform="translate(-742.087 -220.42)" fill="#eee0c6"/>
            </g>
            <g id="Grupo_116" data-name="Grupo 116" transform="translate(0 4.814)">
              <path id="Caminho_96" data-name="Caminho 96" d="M750.924,225.437h-8.191a.646.646,0,0,1,0-1.292h8.191a.646.646,0,0,1,0,1.292Z" transform="translate(-742.087 -224.145)" fill="#eee0c6"/>
            </g>
          </g>
          <g id="Grupo_121" data-name="Grupo 121" transform="translate(747.161 221.866)">
            <g id="Grupo_120" data-name="Grupo 120">
              <g id="Grupo_119" data-name="Grupo 119">
                <g id="Grupo_118" data-name="Grupo 118">
                  <path id="Caminho_97" data-name="Caminho 97" d="M759.338,250.263a1.292,1.292,0,0,1-.914-.379l-10.877-10.877H737.278a1.293,1.293,0,0,1-1.292-1.292V213.837a1.293,1.293,0,0,1,1.292-1.292h29.638a1.292,1.292,0,0,1,1.292,1.292v23.878a1.292,1.292,0,0,1-1.292,1.292H760.63v9.963a1.293,1.293,0,0,1-1.292,1.292Zm-20.767-13.84h9.512a1.291,1.291,0,0,1,.914.379l9.049,9.049v-8.135a1.292,1.292,0,0,1,1.292-1.292h6.286V215.13H738.571Z" transform="translate(-735.986 -212.545)" fill="#79b729"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Grupo_125" data-name="Grupo 125" transform="translate(697.763 182.47)">
            <g id="Grupo_124" data-name="Grupo 124">
              <g id="Grupo_123" data-name="Grupo 123">
                <g id="Grupo_122" data-name="Grupo 122">
                  <path id="Caminho_98" data-name="Caminho 98" d="M739.947,214.282H710.311a1.292,1.292,0,0,1-1.292-1.292V206.7h-9.963a1.292,1.292,0,0,1-.914-2.206l10.876-10.877V183.353a1.291,1.291,0,0,1,1.292-1.292h29.636a1.291,1.291,0,0,1,1.292,1.292V212.99A1.292,1.292,0,0,1,739.947,214.282ZM711.6,211.7h27.052V184.646H711.6v9.51a1.3,1.3,0,0,1-.379.914l-9.049,9.049h8.135a1.293,1.293,0,0,1,1.292,1.292Z" transform="translate(-697.763 -182.061)" fill="#79b729"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Grupo_126" data-name="Grupo 126" transform="translate(702.694 219.202)">
            <path id="Caminho_99" data-name="Caminho 99" d="M702.87,248.855a1.292,1.292,0,0,1-1.161-1.86l6.243-12.793a16.994,16.994,0,0,1-1.3-6.535,17.227,17.227,0,1,1,9.005,15.095l-12.217,5.963A1.293,1.293,0,0,1,702.87,248.855Zm20.962-35.787A14.577,14.577,0,0,0,710.551,233.7a1.283,1.283,0,0,1-.014,1.1l-4.857,9.952,9.454-4.614a1.292,1.292,0,0,1,1.23.052,14.592,14.592,0,1,0,7.469-27.123Z" transform="translate(-701.578 -210.483)" fill="#79b729"/>
          </g>
          <g id="Grupo_127" data-name="Grupo 127" transform="translate(744.304 180.662)">
            <path id="Caminho_100" data-name="Caminho 100" d="M771.92,219.032a1.271,1.271,0,0,1-.566-.132l-12.217-5.962a17.215,17.215,0,1,1,7.7-8.558l6.243,12.793a1.292,1.292,0,0,1-1.161,1.858Zm-12.829-8.846a1.307,1.307,0,0,1,.567.131l9.452,4.614-4.857-9.951a1.3,1.3,0,0,1-.014-1.1,14.646,14.646,0,1,0-5.811,6.492A1.29,1.29,0,0,1,759.091,210.186Z" transform="translate(-733.775 -180.662)" fill="#79b729"/>
          </g>
        </g>
      </svg>

    </Box>
  )
}
