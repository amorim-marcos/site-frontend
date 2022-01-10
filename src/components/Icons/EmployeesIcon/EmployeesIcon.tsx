import { Heading, Flex, Box, Text, Center, Container } from "@chakra-ui/react"
import { ResponsiveCss } from 'types/responsive'

export type EmployeesIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const EmployeesIcon = ({ 
  stroke1 = '#59993f',
  stroke2 = '#eee0c6',
  height = '47px',
  width = '67px',
  onClick
 }: EmployeesIconProps) => {
  return (
    <Box w={width} h={height}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 57.086 60.011"
        data-testid="employees-icon"
      >
  <g id="funcionários" transform="translate(-415.793 -497.336)">
    <g id="Grupo_781" data-name="Grupo 781" transform="translate(442.462 497.336)">
      <g id="Grupo_780" data-name="Grupo 780">
        <g id="Caminho_940" data-name="Caminho 940">
          <path id="Caminho_1160" data-name="Caminho 1160" d="M441.989,508.074a5.369,5.369,0,0,1,0-10.738h0a5.369,5.369,0,1,1,0,10.738Zm0-8.178a2.808,2.808,0,0,0,0,5.617,2.808,2.808,0,1,0,0-5.617Z" transform="translate(-436.622 -497.336)" fill={stroke1}/>
        </g>
      </g>
    </g>
    <g id="Grupo_783" data-name="Grupo 783" transform="translate(438.67 505.514)">
      <g id="Grupo_782" data-name="Grupo 782">
        <g id="Caminho_941" data-name="Caminho 941">
          <path id="Caminho_1161" data-name="Caminho 1161" d="M450.308,515.368H435.336a1.677,1.677,0,0,1-1.675-1.673c0-5.5,4.109-9.971,9.16-9.971s9.162,4.474,9.162,9.971A1.677,1.677,0,0,1,450.308,515.368Zm-14.039-2.561h13.106c-.392-3.669-3.182-6.523-6.554-6.523S436.661,509.138,436.269,512.807Z" transform="translate(-433.661 -503.723)" fill={stroke1}/>
        </g>
      </g>
    </g>
    <g id="Grupo_781-2" data-name="Grupo 781" transform="translate(446.381 520.261)">
      <g id="Grupo_780-2" data-name="Grupo 780">
        <g id="Caminho_940-2" data-name="Caminho 940">
          <path id="Caminho_1162" data-name="Caminho 1162" d="M449.138,534.158a9.459,9.459,0,0,1,0-18.917h0a9.459,9.459,0,0,1,0,18.917Zm0-16.356a6.9,6.9,0,1,0,6.9,6.9,6.917,6.917,0,0,0-6.9-6.9Z" transform="translate(-439.683 -515.241)" fill={stroke1}/>
        </g>
      </g>
    </g>
    <g id="Grupo_783-2" data-name="Grupo 783" transform="translate(438.798 536.617)">
      <g id="Grupo_782-2" data-name="Grupo 782">
        <g id="Caminho_941-2" data-name="Caminho 941">
          <path id="Caminho_1163" data-name="Caminho 1163" d="M465.775,548.746H435.83a2.07,2.07,0,0,1-2.069-2.068c0-10.29,7.644-18.662,17.04-18.662s17.04,8.372,17.04,18.662A2.071,2.071,0,0,1,465.775,548.746Zm-29.447-2.561h28.946c-.236-8.651-6.637-15.609-14.473-15.609S436.562,537.534,436.328,546.185Z" transform="translate(-433.761 -528.016)" fill={stroke1}/>
        </g>
      </g>
    </g>
    <g id="Grupo_781-3" data-name="Grupo 781" transform="translate(421.841 510.146)">
      <g id="Grupo_780-3" data-name="Grupo 780">
        <g id="Caminho_940-3" data-name="Caminho 940">
          <path id="Caminho_1164" data-name="Caminho 1164" d="M427.875,522.052h0a7.356,7.356,0,0,1,0-14.711h0a7.356,7.356,0,0,1,0,14.711Zm0-13.046a5.69,5.69,0,1,0,0,11.38h0a5.692,5.692,0,0,0,5.689-5.689,5.7,5.7,0,0,0-5.691-5.691Z" transform="translate(-420.517 -507.341)" fill={stroke2}/>
        </g>
      </g>
    </g>
    <g id="Grupo_783-3" data-name="Grupo 783" transform="translate(415.793 523.193)">
      <g id="Grupo_782-3" data-name="Grupo 782">
        <g id="Caminho_941-3" data-name="Caminho 941">
          <path id="Caminho_1165" data-name="Caminho 1165" d="M441.143,533.69H417.255a1.464,1.464,0,0,1-1.462-1.461c0-8.1,6.014-14.7,13.405-14.7s13.4,6.594,13.4,14.7A1.462,1.462,0,0,1,441.143,533.69Zm-23.683-1.664h23.477c-.1-7.092-5.326-12.829-11.738-12.829S417.557,524.934,417.46,532.026Z" transform="translate(-415.793 -517.531)" fill={stroke2}/>
        </g>
      </g>
    </g>
  </g>
</svg>

    </Box>
  )
}
