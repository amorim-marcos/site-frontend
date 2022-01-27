import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type BagIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const BagIcon = ({
  stroke1 = '#75ab17',
  stroke2 = '#edd8ba',
  height = '78px',
  width = '78px',
  onClick
}: BagIconProps) => {
  return (
    <Box w={width} h={height} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 82.229 70.405">
        <g id="mostruario" transform="translate(-861.78 -1358.911)">
          <g id="Caminho_344" data-name="Caminho 344" transform="translate(906.584 1417.089)">
            <path id="Caminho_926" data-name="Caminho 926" d="M902.676,1417.8a.614.614,0,0,1-.5-.25l-3.947-5.359a.618.618,0,0,1,0-.732l3.781-5.135a.616.616,0,0,1,.5-.25h7.895a.617.617,0,0,1,.5.983l-7.728,10.494A.615.615,0,0,1,902.676,1417.8Zm-3.182-5.976,3.182,4.32,6.51-8.838h-6.363Z" transform="translate(-898.112 -1406.072)" fill={stroke2}/>
          </g>
          <g id="Caminho_351" data-name="Caminho 351" transform="translate(918.261 1404.32)">
            <path id="Caminho_927" data-name="Caminho 927" d="M923.735,1420.1a.614.614,0,0,1-.5-.25l-7.642-10.377a.618.618,0,0,1,0-.732l8.68-11.785h-6.363l-8.95,12.152,7.374,10.011a.617.617,0,1,1-.993.733l-7.643-10.377a.618.618,0,0,1,0-.732l9.4-12.768a.612.612,0,0,1,.5-.25H925.5a.616.616,0,0,1,.5.983l-9.135,12.4,7.373,10.011a.616.616,0,0,1-.5.983Z" transform="translate(-907.582 -1395.718)" fill={stroke2}/>
          </g>
          <g id="Grupo_761" data-name="Grupo 761" transform="translate(862.974 1396.93)">
            <path id="Caminho_928" data-name="Caminho 928" d="M936.261,1422.11H869.077a6.334,6.334,0,0,1-6.329-6.328v-24.825a1.233,1.233,0,1,1,2.466,0v24.825a3.866,3.866,0,0,0,3.862,3.861h67.184a3.865,3.865,0,0,0,3.861-3.861v-23.978a1.233,1.233,0,0,1,2.466,0v23.978A6.334,6.334,0,0,1,936.261,1422.11Z" transform="translate(-862.748 -1389.725)" fill={stroke1}/>
          </g>
          <g id="Grupo_762" data-name="Grupo 762" transform="translate(884.304 1358.911)">
            <path id="Caminho_929" data-name="Caminho 929" d="M916.59,1370.193h-4a.616.616,0,0,1-.617-.616v-5.849a3.674,3.674,0,0,0-3.67-3.67H888.979a3.673,3.673,0,0,0-3.667,3.67v5.849a.617.617,0,0,1-.617.616h-4.051a.617.617,0,0,1,0-1.233h3.435v-5.232a4.907,4.907,0,0,1,4.9-4.9H908.3a4.908,4.908,0,0,1,4.9,4.9v5.232h3.388a.617.617,0,1,1,0,1.233Z" transform="translate(-880.027 -1358.825)" fill={stroke2}/>
          </g>
          <g id="Grupo_763" data-name="Grupo 763" transform="translate(892.824 1362.484)">
            <path id="Caminho_930" data-name="Caminho 930" d="M906.479,1370.8a.617.617,0,0,1-.617-.617v-4.666a2.491,2.491,0,0,0-2.487-2.489h-12.7a2.491,2.491,0,0,0-2.489,2.489v4.666a.617.617,0,1,1-1.233,0v-4.666a3.726,3.726,0,0,1,3.722-3.722h12.7a3.725,3.725,0,0,1,3.72,3.722v4.666A.617.617,0,0,1,906.479,1370.8Z" transform="translate(-886.954 -1361.792)" fill={stroke2}/>
          </g>
          <g id="Grupo_764" data-name="Grupo 764" transform="translate(861.78 1370.28)">
            <path id="Caminho_931" data-name="Caminho 931" d="M937.68,1398.888H868.107a6.334,6.334,0,0,1-6.327-6.327v-18.118a6.335,6.335,0,0,1,6.327-6.328H937.68a6.335,6.335,0,0,1,6.329,6.328v18.118A6.334,6.334,0,0,1,937.68,1398.888Zm-69.573-28.307a3.867,3.867,0,0,0-3.861,3.862v18.118a3.865,3.865,0,0,0,3.861,3.861H937.68a3.865,3.865,0,0,0,3.862-3.861v-18.118a3.867,3.867,0,0,0-3.862-3.862Z" transform="translate(-861.78 -1368.114)" fill={stroke1}/>
          </g>
        </g>
      </svg>
    </Box>
  )
}
