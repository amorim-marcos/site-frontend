import { LinkIcon } from '@chakra-ui/icons'
import { Flex, Box, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'

export type UrlCopyIconProps = {
  urlToCopy?: string
  hoverTitle?: string
}
export const UrlCopyIcon = ({
  urlToCopy = '',
  hoverTitle
}: UrlCopyIconProps) => {
  const [showSuccessTooltip, setShowTooltip] = useState(false)

  const title = hoverTitle || 'Copiar link para a seção'

  const handleCopyUrl = (url: string) => {
    setShowTooltip(true)

    setTimeout(() => {
      setShowTooltip(false)
    }, 1000 * 1)

    navigator.clipboard.writeText(url)
  }
  return (
    <Box>
      <Flex
        position="absolute"
        top={{ base: '100%', md: '4' }}
        left={'4'}
        width={`100%`}
        height={'30%'}
        transition="all .1s ease-in-out"
        _hover={{ color: '#458a61' }}
        _focus={{ outline: 'none' }}
        color="transparent"
      >
        <Tooltip isOpen={showSuccessTooltip} label="Copiado!" placement="top">
          <Box
            onClick={() => handleCopyUrl(urlToCopy)}
            title={title}
            cursor="pointer"
          >
            <LinkIcon />
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  )
}
