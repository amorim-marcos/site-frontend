import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type BadgeIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const BadgeIcon = ({
  stroke1 = '#75ab17',
  stroke2 = '#edd8ba',
  height = '78px',
  width = '78px',
  onClick
}: BadgeIconProps) => {
  return (
    <Box w={width} h={height} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="78.964" height="70.417" viewBox="0 0 78.964 70.417">
        <g id="vagas" transform="translate(-777.749 -1341.656)">
          <g id="Caminho_342" data-name="Caminho 342" transform="translate(816.756 1341.656)">
            <g id="Grupo_774" data-name="Grupo 774">
              <path id="Caminho_936" data-name="Caminho 936" d="M834.495,1342a.62.62,0,0,0-.552-.34H819.65a.616.616,0,0,0-.5.251l-9.875,13.409a5.6,5.6,0,0,1,.794,1.006l9.891-13.429H832.72l-10.039,13.63a.619.619,0,0,0,1,.735l10.764-14.616A.616.616,0,0,0,834.495,1342Z" transform="translate(-809.277 -1341.656)" fill={stroke2}/>
            </g>
          </g>
          <g id="Grupo_776" data-name="Grupo 776" transform="translate(777.749 1355.654)">
            <g id="Grupo_775" data-name="Grupo 775">
              <path id="Caminho_937" data-name="Caminho 937" d="M850.44,1352.97H818.1a1.229,1.229,0,0,0-.5.106,6.1,6.1,0,0,1,1.273,2.368H850.44a3.8,3.8,0,0,1,3.8,3.8v43.874a3.8,3.8,0,0,1-3.8,3.8H784.022a3.8,3.8,0,0,1-3.8-3.8v-43.874a3.8,3.8,0,0,1,3.8-3.8H803.8a1.2,1.2,0,0,0,.7-.246,6.063,6.063,0,0,1-1.24-2.228H784.022a6.28,6.28,0,0,0-6.273,6.273v43.874a6.28,6.28,0,0,0,6.273,6.273H850.44a6.279,6.279,0,0,0,6.273-6.273v-43.874A6.279,6.279,0,0,0,850.44,1352.97Z" transform="translate(-777.749 -1352.97)" fill={stroke1}/>
            </g>
          </g>
          <g id="Caminho_342-2" data-name="Caminho 342" transform="translate(792.42 1341.656)">
            <g id="Grupo_777" data-name="Grupo 777">
              <path id="Caminho_938" data-name="Caminho 938" d="M821.548,1366.012H807.253a.616.616,0,0,1-.5-.251l-17.028-23.119a.619.619,0,0,1,.5-.986h14.292a.618.618,0,0,1,.5.251l17.028,23.119a.619.619,0,0,1-.5.986Zm-13.982-1.237h12.758l-16.118-21.881H791.45Z" transform="translate(-789.607 -1341.656)" fill={stroke2}/>
            </g>
          </g>
          <g id="Grupo_779" data-name="Grupo 779" transform="translate(801.8 1364.156)">
            <g id="Grupo_778" data-name="Grupo 778">
              <path id="Caminho_939" data-name="Caminho 939" d="M826.814,1362.316H798.426a1.237,1.237,0,0,1,0-2.474h28.388a1.237,1.237,0,0,1,0,2.474Z" transform="translate(-797.189 -1359.842)" fill={stroke1}/>
            </g>
          </g>
          <g id="Grupo_784" data-name="Grupo 784" transform="translate(787.772 1373.277)">
            <g id="Grupo_781" data-name="Grupo 781" transform="translate(4.716)">
              <g id="Grupo_780" data-name="Grupo 780">
                <path id="Caminho_940" data-name="Caminho 940" d="M797.319,1382.528a7.657,7.657,0,1,1,7.656-7.657A7.666,7.666,0,0,1,797.319,1382.528Zm0-14.077a6.42,6.42,0,1,0,6.419,6.42A6.427,6.427,0,0,0,797.319,1368.451Z" transform="translate(-789.662 -1367.214)" fill={stroke2}/>
              </g>
            </g>
            <g id="Grupo_783" data-name="Grupo 783" transform="translate(0 14.077)">
              <g id="Grupo_782" data-name="Grupo 782">
                <path id="Caminho_941" data-name="Caminho 941" d="M809.977,1392.857H786.469a.619.619,0,0,1-.619-.619c0-7.525,5.55-13.646,12.373-13.646s12.372,6.122,12.372,13.646A.619.619,0,0,1,809.977,1392.857ZM787.1,1391.62h22.244c-.291-6.556-5.168-11.791-11.121-11.791S787.392,1385.064,787.1,1391.62Z" transform="translate(-785.85 -1378.592)" fill={stroke2}/>
              </g>
            </g>
          </g>
          <g id="Grupo_785" data-name="Grupo 785" transform="translate(816.756 1373.896)">
            <path id="Caminho_942" data-name="Caminho 942" d="M835.055,1368.951H808.4a.62.62,0,0,1,0-1.237h26.657a.62.62,0,0,1,0,1.237Z" transform="translate(-807.817 -1367.714)" fill={stroke2}/>
          </g>
          <g id="Grupo_786" data-name="Grupo 786" transform="translate(816.756 1380.313)">
            <path id="Caminho_943" data-name="Caminho 943" d="M835.055,1374.139H808.4a.62.62,0,0,1,0-1.237h26.657a.62.62,0,0,1,0,1.237Z" transform="translate(-807.817 -1372.901)" fill={stroke2}/>
          </g>
          <g id="Grupo_787" data-name="Grupo 787" transform="translate(816.756 1386.06)">
            <path id="Caminho_944" data-name="Caminho 944" d="M826.888,1378.783H808.4a.62.62,0,0,1,0-1.237h18.491a.62.62,0,0,1,0,1.237Z" transform="translate(-807.817 -1377.546)" fill={stroke2}/>
          </g>
        </g>
      </svg>

    </Box>
  )
}
