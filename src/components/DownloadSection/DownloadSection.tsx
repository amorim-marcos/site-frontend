import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  FlexProps,
  Link
} from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import HtmlTextParser from '@components/HtmlTextParser'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'
import { useState } from 'react'

export type DownloadSectionProps = {
  title: string
  description: string
  grafism: 'type1' | 'type2' | 'type3'
  items: Array<{
    urlImage: string
    title: string
    downloadUrl: string
  }>
}
export const DownloadSection = ({
  title,
  grafism,
  items,
  description
}: DownloadSectionProps) => {
  const { isMobile } = useMobile(768)
  const [itemsData, setItemsData] = useState(items)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)

  function avanceRight() {
    if (isMobile || items.length > 5) {
      const item = itemsData[0]
      const newArray = itemsData.filter((j, i) => i > 0)
      newArray.push(item)
      setItemsData(newArray)
    }
  }

  function avanceLeft() {
    if (isMobile || items.length > 5) {
      const item = itemsData[itemsData.length - 1]
      const newArray = itemsData.filter((j, i) => i < itemsData.length - 1)
      newArray.unshift(item)
      setItemsData(newArray)
    }
  }

  return (
    <Flex
      marginBottom="10%"
      flexDir="column"
      p="3%"
      bg="green.100"
      position="relative"
      paddingBottom={{ base: '10%', md: '0' }}
    >
      <Text as="h3" variant={'h3' as any} color="green.800" zIndex="docked">
        {title}
      </Text>
      <Text variant={'body' as any} color="green.900" zIndex="docked">
        <HtmlTextParser>{description}</HtmlTextParser>
      </Text>

      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        top={'0'}
        right={'0'}
        zIndex="base"
      >
        <Image
          src={
            grafism === 'type1'
              ? '/img/grafism_downloads1.png'
              : grafism === 'type2'
              ? '/img/grafism_downloads2.png'
              : '/img/grafism_downloads3.png'
          }
          width="43vw"
        />
      </Box>

      <Flex
        zIndex="docked"
        marginY="3%"
        justifyContent={{
          base: 'center',
          md: itemsData.length > 4 ? 'space-between' : 'flex-start'
        }}
      >
        {itemsData.map((item, i) => {
          return i < 5 ? (
            <Item
              key={i}
              url={item.downloadUrl}
              cursor={'pointer'}
              display={i < 1 ? { base: 'flex' } : { base: 'none', md: 'flex' }}
              imageUrl={item.urlImage}
              title={item.title}
              marginRight={
                itemsData.length <= 4 ? { base: '0', md: '3.5%' } : '0'
              }
            />
          ) : (
            ''
          )
        })}
      </Flex>
      {(items.length > 5 || isMobile) && (
        <Flex
          position="absolute"
          left="0px"
          right="0px"
          marginX="auto"
          w="fit-content"
          bottom={{ base: '-20px', sm: '-20px', lg: '-30px', xl: '-30px' }}
        >
          <Button
            onMouseEnter={() => setHoverBtnControl(true)}
            onMouseLeave={() => setHoverBtnControl(false)}
            variant="no-border"
            background="gray.300"
            color="gray.150"
            w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            _hover={{
              background: 'green.550',
              color: 'white.100'
            }}
            onClick={avanceLeft}
          >
            {isMobile ? (
              <Arrow width="5" height="5" direction="left" />
            ) : (
              <Arrow width="22" height="30" direction="left" />
            )}
          </Button>
          <Button
            onMouseEnter={() => setHoverBtnControl(true)}
            onMouseLeave={() => setHoverBtnControl(false)}
            variant="no-border"
            background="gray.300"
            color="gray.150"
            w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            _hover={{
              background: 'green.550',
              color: 'white.100'
            }}
            onClick={avanceRight}
          >
            {isMobile ? (
              <Arrow width="5" height="5" direction="right" />
            ) : (
              <Arrow width="22" height="30" direction="right" />
            )}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export interface ItemProps extends FlexProps {
  imageUrl: string
  title: string
  url: string
}

const Item = ({ url, title, imageUrl, ...props }: ItemProps) => {
  return (
    <Flex
      {...props}
      w={{ base: '90%', md: '17%' }}
      flexDirection="column"
      alignItems="center"
    >
      <Link href={url} w="100%" isExternal>
        <Flex
          w="100%"
          h={{
            base: '334px',
            md: '178px',
            lg: '222px',
            xl: '267px',
            '2xl': '334px'
          }}
          bg="white.100"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={imageUrl} maxHeight="90%" maxWidth="70%" />
        </Flex>
        <Text marginTop="10%" color="brown.300" variant={'body' as any}>
          {title}
        </Text>
      </Link>
    </Flex>
  )
}
