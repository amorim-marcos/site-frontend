import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export type GrafismDownloadsProps = {
  width?: ResponsiveCss
  color?: string
  maxWidth?: ResponsiveCss
}

export const GrafismDownloads1 = ({
  width = '1760px',
  color = '#fff8eb',
  maxWidth = '1760px'
}: GrafismDownloadsProps) => {
  return (
    <Box width={width} maxWidth={maxWidth} color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="855"
        height="220"
        viewBox="0 0 855 220"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Retângulo_482"
              data-name="Retângulo 482"
              width="855"
              height="220"
              transform="translate(534 2628)"
              fill="#e3d5bb"
            />
          </clipPath>
        </defs>
        <g
          id="GRAFISMO_1"
          data-name="GRAFISMO 1"
          transform="translate(-534 -2628)"
          clipPath="url(#clip-path)"
        >
          <g
            id="Grupo_604"
            data-name="Grupo 604"
            transform="translate(726.325 2620.694)"
          >
            <path
              id="Caminho_823"
              data-name="Caminho 823"
              d="M-220.232-105.626l57.139,77.576h-48.587l-57.139-77.576Z"
              transform="translate(497.832 235.74)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_824"
              data-name="Caminho 824"
              d="M-109.463-135.2l24.294-32.982,46.351,62.93,56-76.029.149-.2H65.919L9.148-104.412,65.919-27.337H17.331l-56.4-76.575H-86.417Z"
              transform="translate(109.463 250.74)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_825"
              data-name="Caminho 825"
              d="M-93.109,48.768H-141.7l-23.047-31.29L-140.45-15.5Z"
              transform="translate(323.772 250.74)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_826"
              data-name="Caminho 826"
              d="M-401.432-174.165l56.4-76.576h47.345l-56.4,76.576Z"
              transform="translate(765.035 250.74)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_827"
              data-name="Caminho 827"
              d="M-297.684-204.954l23.673-32.139,46.351,62.929h-47.345Z"
              transform="translate(591.262 250.74)"
              fill="#e3d5bb"
            />
          </g>
          <g
            id="Grupo_605"
            data-name="Grupo 605"
            transform="translate(1313.718 2612.798)"
          >
            <path
              id="Caminho_828"
              data-name="Caminho 828"
              d="M-220.232-28.051l57.139-77.576h-48.587l-57.139,77.576Z"
              transform="translate(427.438 121.34)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_829"
              data-name="Caminho 829"
              d="M-109.211-103.569l56,76.029.149.2H-4.474l-56.77-77.075,56.77-77.075H-53.062l-56.4,76.575Z"
              transform="translate(109.463 178.488)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_830"
              data-name="Caminho 830"
              d="M-401.432-250.74l56.4,76.576h47.345l-56.4-76.576Z"
              transform="translate(694.641 397.568)"
              fill="#e3d5bb"
            />
            <path
              id="Caminho_831"
              data-name="Caminho 831"
              d="M-297.684-206.3l23.673,32.139,46.351-62.929h-47.345Z"
              transform="translate(520.869 383.921)"
              fill="#e3d5bb"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
