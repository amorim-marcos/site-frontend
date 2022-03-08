import {
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Link as ChakraLink
} from '@chakra-ui/react'

import { DownloadIcon, CloseIcon } from '@components/Icons'

export const DownloadModal = (props: {
  productName: string
  productImg: string
  isOpen: boolean
  assetsUrl: string
  onClose: () => void
}) => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay bg="rgba(255, 255, 255, 0.4)" backdropFilter="blur(9px)" />
    <ModalContent
      boxShadow="2px 2px 10px -1px rgba(0,0,0,0.6)"
      borderTopRadius="22px"
    >
      <ModalHeader>
        <Flex align="center" justify="space-between" w="100%" pr="20px">
          <Text
            color="green.900"
            fontSize="33px"
            fontWeight="extrabold"
            letterSpacing="-0.66px"
          >
            {props.productName}
          </Text>
          <CloseIcon
            onClick={props.onClose}
            boxSize="25px"
            color="#143127"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{ filter: 'brightness(2.5)' }}
          />
        </Flex>
      </ModalHeader>
      <ModalBody pos="relative" padding={0}>
        <Image
          src={props.productImg}
          w={{ base: '100%', sm: '538px' }}
          h={{ base: '420px', sm: '620px' }}
        />
        <ChakraLink href={props.assetsUrl} download>
          <DownloadIcon
            pos="absolute"
            bottom="34px"
            right="35px"
            cursor="pointer"
            transition="all 0.3s ease-in-out"
            _hover={{ filter: 'brightness(1.2)' }}
          />
        </ChakraLink>
      </ModalBody>
    </ModalContent>
  </Modal>
)
