import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type FiltersDarkModeIconProps = {
  color?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  activated?: Boolean
}

const ActivatedDarkMode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 18">
    <g id="Grupo_185" data-name="Grupo 185" transform="translate(-1395 -447)">
      <rect id="Retângulo_114" data-name="Retângulo 114" width="18" height="38" rx="9" transform="translate(1395 465) rotate(-90)" fill="#bbc4b9"/>
      <path id="Caminho_187" data-name="Caminho 187" d="M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z" transform="translate(1417 463) rotate(-90)" fill="#7c7c7c"/>
    </g>
  </svg>
  )

const DeactivatedDarkMode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 18">
    <g id="Grupo_185" data-name="Grupo 185" transform="translate(-1395 -447)">
      <rect id="Retângulo_114" data-name="Retângulo 114" width="18" height="38" rx="9" transform="translate(1395 465) rotate(-90)" fill="#bbc4b9"/>
      <path id="Caminho_187" data-name="Caminho 187" d="M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z" transform="translate(1398 463) rotate(-90)" fill="#7c7c7c"/>
    </g>
  </svg>  
)

export const FiltersDarkModeIcon = ({
  height = '18px',
  width = '38px',
  activated = false,
  ...props
}: FiltersDarkModeIconProps) => {
  return (
    <Box w={width} h={height} {...props}>
      {(activated === true) ? <ActivatedDarkMode /> : <DeactivatedDarkMode />}
    </Box>
  )
}
