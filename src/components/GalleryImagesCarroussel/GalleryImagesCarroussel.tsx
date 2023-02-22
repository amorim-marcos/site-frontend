import { Flex, Grid, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { VscClose } from 'react-icons/vsc'

import GalleryCarrouselCore from './Core'

export default function GalleryCarrousel({
  active,
  onClose,
  data,
  index
}: {
  data: {
    images?: string[]
  }
  index?: number
  active: boolean
  onClose: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active) {
      setVisible(true)
    }
  }, [active])

  function close() {
    setVisible(false)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <Flex
      display={{ base: 'none', '2xl': active ? 'flex' : 'none' }}
      //   display={'none'}
      position={'relative'}
      zIndex="modal"
      transition={'0.5s'}
      opacity={visible ? 1 : 0}
    >
      <Flex
        w="100vw"
        h="100vh"
        position={'fixed'}
        top="0"
        left="0"
        zIndex="modal"
      >
        <GalleryCarrouselCore data={data.images || []} index={index} />

        <CloseBtn onClick={close} />
      </Flex>
    </Flex>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const CloseBtn = ({ onClick = () => {} }) => {
  return (
    <Flex
      position={'absolute'}
      right={{ base: '0', md: '50px' }}
      top={{ base: '0', md: '50px' }}
      w="34px"
      h="34px"
      bg={'green.800'}
      cursor="pointer"
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
    >
      <VscClose size="34px" stroke={'white'} color={'white'} />
    </Flex>
  )
}
