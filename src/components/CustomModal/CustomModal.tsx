import {
  Heading,
  Flex,
  Box,
  Text,
  Center,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody
} from '@chakra-ui/react'
import { CloseIcon } from '@components/Icons'

export type CustomModalProps = {
  modalTitle?: string
  children?: React.ReactNode
  modalWidth?: string
  modalHeight?: string
  isModalOpen: boolean
  onModalClose: () => void
  modalSize?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full'
}
export const CustomModal = ({
  modalTitle,
  children,
  modalHeight,
  modalWidth,
  isModalOpen,
  onModalClose,
  modalSize
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      size={modalSize || '6xl'}
      isCentered
    >
      <ModalOverlay
        style={{
          zoom: 1.4
        }}
        w={'200vw'}
        bg="rgba(255, 255, 255, 0.4)"
        backdropFilter={'blur(9px)'}
      />
      {/* todo
        make the modal responsive
      */}
      <ModalContent
        boxShadow="2px 2px 10px -1px rgba(0,0,0,0.6)"
        borderTopRadius={modalSize === 'full' ? 0 : '22px'}
        overflow="hidden"
        height={'100%'}
        // maxHeight={'90%'}
        // maxWidth={'90%'}
      >
        {modalTitle && (
          <ModalHeader>
            <Flex align="center" justify="space-between" w="100%" pr="20px">
              <Text
                color="green.900"
                fontSize="33px"
                fontWeight="extrabold"
                letterSpacing="-0.66px"
              >
                {modalTitle}
              </Text>
              <CloseIcon
                onClick={onModalClose}
                boxSize={'25px'}
                color="#143127"
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                _hover={{ filter: 'brightness(2.5)' }}
              />
            </Flex>
          </ModalHeader>
        )}
        <ModalBody padding={0} borderTopRadius="22px">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
