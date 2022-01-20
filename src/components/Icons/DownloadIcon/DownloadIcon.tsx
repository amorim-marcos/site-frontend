import { Box, BoxProps } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'

export interface DownloadIconProps extends BoxProps {
  stroke1?: string
  stroke2?: string
  boxSize?: ResponsiveCss
  onClick?: () => void
}

export const DownloadIcon = ({
  stroke1 = '#133128',
  stroke2 = '#f5f6f4',
  boxSize = ['56px'],
  onClick,
  ...rest
}: DownloadIconProps) => {
  return (
    <Box boxSize={boxSize} onClick={onClick} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 68.964 68.964"
      >
        <defs>
          <filter
            id="Caminho_248"
            x="0"
            y="0"
            width="68.964"
            height="68.964"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodOpacity="0.027" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="download" transform="translate(6 6)">
          <g transform="matrix(1, 0, 0, 1, -6, -6)" filter="url(#Caminho_248)">
            <path
              id="Caminho_248-2"
              data-name="Caminho 248"
              d="M13.146,0H43.818A13.146,13.146,0,0,1,56.964,13.146V43.818A13.146,13.146,0,0,1,43.818,56.964H13.146A13.146,13.146,0,0,1,0,43.818V13.146A13.146,13.146,0,0,1,13.146,0Z"
              transform="translate(6 6)"
              fill={stroke1}
            />
          </g>
          <g
            id="Grupo_225"
            data-name="Grupo 225"
            transform="translate(14.461 13.503)"
          >
            <path
              id="Caminho_215"
              data-name="Caminho 215"
              d="M350.973,134.857a1.743,1.743,0,0,0-1.744,1.744v6.027H327.205V136.6a1.744,1.744,0,1,0-3.487,0v7.771a1.744,1.744,0,0,0,1.744,1.744h25.512a1.743,1.743,0,0,0,1.744-1.744V136.6A1.743,1.743,0,0,0,350.973,134.857Z"
              transform="translate(-323.718 -116.729)"
              fill={stroke2}
            />
            <path
              id="Caminho_216"
              data-name="Caminho 216"
              d="M336.206,140.751a1.786,1.786,0,0,0,.266.219c.017.012.037.019.056.03a1.669,1.669,0,0,0,.243.129c.033.014.067.02.1.031a1.617,1.617,0,0,0,.224.069,1.72,1.72,0,0,0,.689,0,1.614,1.614,0,0,0,.224-.069c.034-.012.069-.017.1-.031a1.73,1.73,0,0,0,.243-.129c.017-.012.038-.019.056-.03a1.85,1.85,0,0,0,.266-.219l7.187-7.188A1.743,1.743,0,1,0,343.4,131.1l-4.214,4.212V121a1.744,1.744,0,1,0-3.487,0V135.31l-4.214-4.212a1.743,1.743,0,0,0-2.465,2.465Z"
              transform="translate(-322.94 -119.261)"
              fill={stroke2}
            />
          </g>
        </g>
      </svg>
    </Box>
  )
}
