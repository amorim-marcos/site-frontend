import { Box } from '@chakra-ui/react'
import { ResponsiveCss } from '../../../../../types/responsive'

export type GrafismProductWithBPProps = {
  width?: ResponsiveCss
  color?: string
  type?: 'centralizedBtn' | 'bottomBtn'
}

function visible(type: 'centralizedBtn' | 'bottomBtn') {
  if (type === 'bottomBtn') {
    return { top: '-20px' }
  }
  return { bottom: '-20px' }
}

export const GrafismProductWithBP = ({
  width,
  color = '#0a6c3b',
  type = 'bottomBtn'
}: GrafismProductWithBPProps) => {
  return (
    <Box overflow="hidden" height={'400px'} position="relative" width={width}>
      <Box
        position="absolute"
        {...visible(type)}
        left="-2"
        width={width}
        color={color}
        opacity="0.4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 29.459 40.939"
        >
          <path
            id="seta"
            d="M0,0,16.015,20.469,0,40.938H13.443L29.458,20.469h0L13.443,0Z"
            transform="translate(0 0)"
            fill="currentColor"
          />
        </svg>
      </Box>
    </Box>
  )
}
