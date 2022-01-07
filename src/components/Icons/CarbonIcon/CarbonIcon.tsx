
import { Box, Center } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type CarbonIconProps = {
  stroke1?: string
  stroke2?: string
  height?: ResponsiveCss
  width?: ResponsiveCss
  onClick?: () => void
}
export const CarbonIcon = ({ 
  stroke1 = '#59993f',
  stroke2 = '#144835',
  height = '84px',
  width = '97px',
  onClick
 }: CarbonIconProps) => {
  return (
  <Box w={width} h={height} bg=''>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 83.166 96.133"
      data-testid="carbon-icon"
    >
      <g id="carbono" transform="translate(20 0.945)">
        <g id="Grupo_1335" data-name="Grupo 1335" transform="translate(-20 42.935)">
          <g id="Grupo_1331" data-name="Grupo 1331">
            <g id="Grupo_1329" data-name="Grupo 1329" transform="translate(16.04)">
              <path id="Caminho_1359" data-name="Caminho 1359" d="M677.795,991.148H664.964a.849.849,0,1,1,0-1.7H676.02l-7.206-8.943a.85.85,0,0,1,.661-1.383h5.249l-7.206-8.945a.849.849,0,0,1,.661-1.381h3.833l-7.207-8.944a.849.849,0,0,1,.659-1.381H668.3l-7.206-8.944a.848.848,0,1,1,1.32-1.065l8.321,10.325a.849.849,0,0,1-.661,1.381h-2.837l7.207,8.944a.85.85,0,0,1-.659,1.383h-3.835l7.207,8.944a.85.85,0,0,1-.661,1.383h-5.25l7.207,8.942a.85.85,0,0,1-.661,1.383Z" 
                transform="translate(-660.907 -948.148)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1330" data-name="Grupo 1330">
              <path id="Caminho_1360" data-name="Caminho 1360" d="M662.3,991.148H649.47a.85.85,0,0,1-.659-1.383l7.207-8.942h-5.244a.856.856,0,0,1-.769-.483.847.847,0,0,1,.1-.9l7.207-8.944h-3.822a.86.86,0,0,1-.772-.483.846.846,0,0,1,.1-.9l7.207-8.944H657.19a.849.849,0,0,1-.661-1.381l8.321-10.325a.848.848,0,1,1,1.32,1.065l-7.207,8.944H661.8a.849.849,0,0,1,.661,1.381l-7.208,8.944h3.835a.849.849,0,0,1,.661,1.381l-7.208,8.945h5.251a.85.85,0,0,1,.659,1.383l-7.207,8.943H662.3a.849.849,0,0,1,0,1.7Z" 
              transform="translate(-648.622 -948.148)" 
              fill={stroke1}/>
            </g>
          </g>
          <g id="Grupo_1334" data-name="Grupo 1334" transform="translate(12.831 41.302)">
            <g id="Grupo_1332" data-name="Grupo 1332">
              <path id="Caminho_1361" data-name="Caminho 1361" d="M659.3,990.1a.849.849,0,0,1-.85-.85v-8.62a.849.849,0,1,1,1.7,0v8.62A.849.849,0,0,1,659.3,990.1Z" 
                transform="translate(-658.449 -979.781)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1333" data-name="Grupo 1333" transform="translate(6.416 0.076)">
              <path id="Caminho_1362" data-name="Caminho 1362" d="M664.213,990.158a.849.849,0,0,1-.85-.849v-8.621a.849.849,0,0,1,1.7,0v8.621A.849.849,0,0,1,664.213,990.158Z" 
                transform="translate(-663.363 -979.839)" 
                fill={stroke1}/>
            </g>
          </g>
        </g>
        <g id="Grupo_1342" data-name="Grupo 1342" transform="translate(18.309 26.734)">
          <g id="Grupo_1338" data-name="Grupo 1338">
            <g id="Grupo_1336" data-name="Grupo 1336" transform="translate(21.123)">
              <path id="Caminho_1363" data-name="Caminho 1363" d="M703.474,992.741h-16.9a1.306,1.306,0,1,1,0-2.611h14.17L691.5,978.657a1.305,1.305,0,0,1,1.016-2.124h6.52l-9.245-11.473a1.306,1.306,0,0,1,1.016-2.126h4.657l-9.245-11.471a1.306,1.306,0,0,1,1.016-2.126h3.345l-9.245-11.471a1.305,1.305,0,1,1,2.032-1.64l10.958,13.6a1.305,1.305,0,0,1-1.017,2.126h-3.344l9.245,11.471a1.305,1.305,0,0,1-1.016,2.126h-4.657l9.245,11.473a1.305,1.305,0,0,1-1.016,2.126h-6.52l9.244,11.473a1.3,1.3,0,0,1-1.016,2.124Z" 
                transform="translate(-681.045 -935.739)" 
                fill={stroke2}/>
            </g>
            <g id="Grupo_1337" data-name="Grupo 1337" transform="translate(0 0.001)">
              <path id="Caminho_1364" data-name="Caminho 1364" d="M683.072,992.741h-16.9a1.3,1.3,0,0,1-1.016-2.124l9.245-11.473H667.89a1.307,1.307,0,0,1-1.025-2.124l9.246-11.474h-4.64a1.31,1.31,0,0,1-1.031-2.124l9.244-11.473h-3.344a1.305,1.305,0,0,1-1.016-2.126l10.957-13.6a1.305,1.305,0,1,1,2.032,1.64l-9.244,11.471h3.344a1.306,1.306,0,0,1,1.016,2.126l-9.244,11.471h4.655a1.305,1.305,0,0,1,1.017,2.124l-9.244,11.474h6.52a1.306,1.306,0,0,1,1.016,2.126L668.9,990.129h14.17a1.306,1.306,0,0,1,0,2.611Z" 
                transform="translate(-664.867 -935.74)" 
                fill={stroke2}/>
            </g>
          </g>
          <g id="Grupo_1341" data-name="Grupo 1341" transform="translate(16.899 54.39)">
            <g id="Grupo_1339" data-name="Grupo 1339">
              <path id="Caminho_1365" data-name="Caminho 1365" d="M679.116,991.361a1.3,1.3,0,0,1-1.306-1.306V978.7a1.306,1.306,0,1,1,2.611,0v11.353A1.305,1.305,0,0,1,679.116,991.361Z" 
                transform="translate(-677.81 -977.397)" 
                fill={stroke2}/>
            </g>
            <g id="Grupo_1340" data-name="Grupo 1340" transform="translate(8.448 0.101)">
              <path id="Caminho_1366" data-name="Caminho 1366" d="M685.586,991.438a1.305,1.305,0,0,1-1.306-1.306V978.78a1.306,1.306,0,1,1,2.611,0v11.353A1.3,1.3,0,0,1,685.586,991.438Z" 
                transform="translate(-684.28 -977.474)" 
                fill={stroke2}/>
            </g>
          </g>
        </g>
        <g id="Grupo_1344" data-name="Grupo 1344" transform="translate(0.653 14.136)">
          <g id="Grupo_1343" data-name="Grupo 1343" transform="translate(0 0)">
            <path id="Caminho_1367" data-name="Caminho 1367" d="M670.435,946.383h-7.768a.786.786,0,0,1-.787-.785V934.729H657.49a.785.785,0,0,1-.556-1.341L666,924.326a.785.785,0,0,1,1.11,0l9.063,9.063a.785.785,0,0,1-.556,1.341h-4.392V945.6A.786.786,0,0,1,670.435,946.383Zm-6.982-1.572h6.2V933.944a.785.785,0,0,1,.785-.785h3.283l-7.167-7.167-7.166,7.167h3.283a.785.785,0,0,1,.785.785Z" 
              transform="translate(-656.703 -924.096)" 
              fill={stroke2}/>
          </g>
        </g>
        <g id="Grupo_1360" data-name="Grupo 1360" transform="translate(16.269 -0.945)">
          <g id="Grupo_1359" data-name="Grupo 1359" transform="translate(0 0)">
            <g id="Grupo_1345" data-name="Grupo 1345" transform="translate(8.892 20.546)">
              <path id="Caminho_1368" data-name="Caminho 1368" d="M677.944,930.359a.784.784,0,0,1-.553-.23l-.17-.169a.786.786,0,0,1,.724-1.324.8.8,0,0,1,.729.214.785.785,0,0,1,0,1.11l-.172.169A.783.783,0,0,1,677.944,930.359Z" 
                transform="translate(-676.988 -928.618)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1346" data-name="Grupo 1346" transform="translate(11.129 13.719)">
              <path id="Caminho_1369" data-name="Caminho 1369" d="M679.625,929.469a.786.786,0,0,1-.556-1.342l.379-.378a.786.786,0,0,1,1.112,1.112l-.379.378A.786.786,0,0,1,679.625,929.469Zm2.275-2.275a.786.786,0,0,1-.556-1.342l.381-.379a.785.785,0,0,1,1.11,1.111l-.379.38A.785.785,0,0,1,681.9,927.194Zm2.275-2.275a.785.785,0,0,1-.556-1.341l.379-.38a.786.786,0,0,1,1.112,1.111l-.38.381A.784.784,0,0,1,684.176,924.919Z" 
                transform="translate(-678.839 -922.968)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1347" data-name="Grupo 1347" transform="translate(17.884 11.652)">
              <path id="Caminho_1370" data-name="Caminho 1370" d="M685.287,923a.873.873,0,0,1-.071-1.742h.242a.785.785,0,0,1,.556,1.341l-.17.172A.783.783,0,0,1,685.287,923Z" 
                transform="translate(-684.43 -921.257)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1348" data-name="Grupo 1348" transform="translate(15.323 11.652)">
              <path id="Caminho_1371" data-name="Caminho 1371" d="M683.523,922.829H683.1a.786.786,0,0,1,0-1.572h.426a.786.786,0,1,1,0,1.572Z" 
                transform="translate(-682.311 -921.257)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1349" data-name="Grupo 1349" transform="translate(12.947 11.411)">
              <path id="Caminho_1372" data-name="Caminho 1372" d="M681.371,922.87h-.242a.786.786,0,0,1-.785-.786v-.24a.915.915,0,1,1,1.027,1.027Z" 
                transform="translate(-680.344 -921.058)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1350" data-name="Grupo 1350" transform="translate(12.947 2.67)">
              <path id="Caminho_1373" data-name="Caminho 1373" d="M681.129,921.708a.786.786,0,0,1-.785-.787v-.486a.786.786,0,0,1,1.572,0v.486A.786.786,0,0,1,681.129,921.708Zm0-2.913a.786.786,0,0,1-.785-.786v-.486a.786.786,0,1,1,1.572,0v.486A.787.787,0,0,1,681.129,918.795Zm0-2.915a.785.785,0,0,1-.785-.785v-.485a.786.786,0,1,1,1.572,0v.485A.786.786,0,0,1,681.129,915.879Z" 
                transform="translate(-680.344 -913.823)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1351" data-name="Grupo 1351" transform="translate(12.705)">
              <path id="Caminho_1374" data-name="Caminho 1374" d="M681.171,913.427a.915.915,0,0,1-.242-1.814h.242a.786.786,0,0,1,.787.787v.242A.786.786,0,0,1,681.171,913.427Z" 
                transform="translate(-680.144 -911.613)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1352" data-name="Grupo 1352" transform="translate(7.563)">
              <path id="Caminho_1375" data-name="Caminho 1375" d="M679.673,913.185h-.429a.786.786,0,0,1,0-1.572h.429a.786.786,0,0,1,0,1.572Zm-2.571,0h-.429a.786.786,0,0,1,0-1.572h.429a.786.786,0,0,1,0,1.572Z" 
                transform="translate(-675.888 -911.613)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1353" data-name="Grupo 1353" transform="translate(5.178)">
              <path id="Caminho_1376" data-name="Caminho 1376" d="M674.7,913.427a.785.785,0,0,1-.785-.785V912.4a.786.786,0,0,1,.785-.787h.243a.937.937,0,0,1-.243,1.814Z" 
                transform="translate(-673.914 -911.613)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1354" data-name="Grupo 1354" transform="translate(5.178 2.669)">
              <path id="Caminho_1377" data-name="Caminho 1377" d="M674.7,921.707a.786.786,0,0,1-.785-.787v-.484a.786.786,0,0,1,1.572,0v.484A.786.786,0,0,1,674.7,921.707Zm0-2.913a.786.786,0,0,1-.785-.786v-.486a.786.786,0,1,1,1.572,0v.486A.786.786,0,0,1,674.7,918.794Zm0-2.914a.785.785,0,0,1-.785-.785v-.486a.786.786,0,1,1,1.572,0v.486A.786.786,0,0,1,674.7,915.88Z" 
                transform="translate(-673.914 -913.822)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1355" data-name="Grupo 1355" transform="translate(4.936 11.411)">
              <path id="Caminho_1378" data-name="Caminho 1378" d="M674.741,922.87H674.5a.914.914,0,1,1,1.028-1.027v.24A.786.786,0,0,1,674.741,922.87Z" 
                transform="translate(-673.714 -921.058)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1356" data-name="Grupo 1356" transform="translate(2.376 11.652)">
              <path id="Caminho_1379" data-name="Caminho 1379" d="M672.808,922.829h-.428a.786.786,0,0,1,0-1.572h.428a.786.786,0,0,1,0,1.572Z" 
                transform="translate(-671.595 -921.257)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1357" data-name="Grupo 1357" transform="translate(0 11.652)">
              <path id="Caminho_1380" data-name="Caminho 1380" d="M670.585,923a.783.783,0,0,1-.556-.23l-.172-.172a.786.786,0,0,1,.556-1.341h.243a.875.875,0,0,1-.071,1.742Z" 
                transform="translate(-669.628 -921.257)" 
                fill={stroke1}/>
            </g>
            <g id="Grupo_1358" data-name="Grupo 1358" transform="translate(2.066 13.719)">
              <path id="Caminho_1381" data-name="Caminho 1381" d="M677.054,929.469a.786.786,0,0,1-.556-.23l-.379-.38a.786.786,0,0,1,1.112-1.111l.379.379a.786.786,0,0,1-.556,1.342Zm-2.274-2.275a.786.786,0,0,1-.556-.23l-.38-.38a.786.786,0,0,1,1.112-1.111l.379.379a.786.786,0,0,1-.554,1.342Zm-2.276-2.276a.784.784,0,0,1-.556-.229l-.379-.38a.786.786,0,1,1,1.111-1.111l.379.379a.785.785,0,0,1-.556,1.341Z" 
                transform="translate(-671.338 -922.968)" 
                fill={stroke1}/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Box>
  )
}
