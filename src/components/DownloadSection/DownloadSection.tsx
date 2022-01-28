import {
  Heading,
  Flex,
  Box,
  Text,
  Center,
  Image,
  Button
} from '@chakra-ui/react'
import Carousel from '@components/Carousel'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'
import { useState } from 'react'
import { GrafismDownloads } from './GrafismDownloads/GrafismDownloads'

export type DownloadSectionProps = {
  title?: string
}
export const DownloadSection = ({ title }: DownloadSectionProps) => {
  const { isMobile } = useMobile(538)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)
  return (
    <Flex
      marginBottom="5%"
      flexDir="column"
      p="3%"
      bg="green.100"
      position="relative"
    >
      <Text as="h3" variant={'h3' as any} color="green.800">
        Materiais de divulgação
      </Text>
      <Text variant={'body' as any} color="green.900">
        Encontre aqui os materiais de divulgação da BERNECK®.
      </Text>
      <Flex marginY="3%" justifyContent="space-between">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Flex>
      <Flex
        position="absolute"
        left="0px"
        right="0px"
        marginX="auto"
        w="fit-content"
        bottom={{ base: '-17px', sm: '-25px', lg: '-30px', xl: '-38px' }}
      >
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="grey.300"
          color="grey.150"
          w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
        >
          <ArrowIcon
            direction="left"
            stroke={hoverBtnControl ? 'white.100' : 'grey.200'}
          />
        </Button>
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="grey.300"
          color="grey.150"
          w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
        >
          <ArrowIcon stroke={hoverBtnControl ? 'white.100' : 'grey.200'} />
        </Button>
      </Flex>
    </Flex>
  )
}

const Item = () => {
  return (
    <Flex w="17%" flexDirection="column" alignItems="center">
      <Flex
        w="100%"
        h={{
          base: '334px',
          sm: '133px',
          md: '178px',
          lg: '222px',
          xl: '267px',
          '2xl': '334px'
        }}
        bg="white.100"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="https://olymp-arts.world/wp-content/uploads/xvision.jpg.pagespeed.ic.-m9gbjOpCf.jpg"
          maxWidth="70%"
        />
      </Flex>
      <Text marginTop="10%" color="brown.300" variant={'body' as any}>
        Portfólio Melamina BP
      </Text>
    </Flex>
  )
}
