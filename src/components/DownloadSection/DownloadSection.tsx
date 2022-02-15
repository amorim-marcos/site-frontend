import { Flex, Box, Text, Image, Button, FlexProps } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import useMobile from 'hooks/useMobile'
import { useState } from 'react'

export type DownloadSectionProps = {
  title?: string
  grafism: 'type1' | 'type2' | 'type3'
  items: Array<{
    urlImage: string
    title: string
  }>
}
export const DownloadSection = ({
  title,
  grafism,
  items
}: DownloadSectionProps) => {
  const { isMobile } = useMobile(568)
  const [itemsData, setItemsData] = useState(items)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)

  function avanceRight() {
    const item = itemsData[0]
    const newArray = itemsData.filter((j, i) => i > 0)
    newArray.push(item)
    setItemsData(newArray)
  }

  function avanceLeft() {
    const item = itemsData[itemsData.length - 1]
    const newArray = itemsData.filter((j, i) => i < itemsData.length - 1)
    newArray.unshift(item)
    setItemsData(newArray)
  }

  return (
    <Flex
      marginBottom="10%"
      flexDir="column"
      p="3%"
      bg="green.100"
      position="relative"
      {...(isMobile && { paddingBottom: '10%' })}
    >
      <Text as="h3" variant={'h3' as any} color="green.800" zIndex="docked">
        Materiais de divulgação
      </Text>
      <Text variant={'body' as any} color="green.900" zIndex="docked">
        Encontre aqui os materiais de divulgação da BERNECK®.
      </Text>

      {!isMobile && (
        <Box position="absolute" top={'0'} right={'0'} zIndex="base">
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
      )}

      <Flex
        zIndex="docked"
        marginY="3%"
        justifyContent={{
          base: 'center',
          sm: itemsData.length > 4 ? 'space-between' : 'flex-start'
        }}
      >
        {itemsData.map((item, i) => {
          return i < 5 ? (
            <Item
              display={i < 1 ? { base: 'flex' } : { base: 'none', sm: 'flex' }}
              key={item.title}
              imageUrl={item.urlImage}
              title={item.title}
              // marginRight={
              //   itemsData.length <= 4 ? { base: '0', sm: '3.5%' } : '0'
              // }
            />
          ) : (
            ''
          )
        })}
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
          background="gray.300"
          color="gray.150"
          w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
          onClick={avanceRight}
        >
          <ArrowIcon
            direction="left"
            stroke={hoverBtnControl ? 'white.100' : 'gray.200'}
            width="40%"
          />
        </Button>
        <Button
          onMouseEnter={() => setHoverBtnControl(true)}
          onMouseLeave={() => setHoverBtnControl(false)}
          variant="no-border"
          background="gray.300"
          color="gray.150"
          w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px' }}
          _hover={{
            background: 'green.600',
            color: 'white.100'
          }}
          onClick={avanceLeft}
        >
          <ArrowIcon
            width="40%"
            stroke={hoverBtnControl ? 'white.100' : 'gray.200'}
          />
        </Button>
      </Flex>
    </Flex>
  )
}

export interface ItemProps extends FlexProps {
  imageUrl: string
  title: string
}

const Item = ({ title, imageUrl, ...props }: ItemProps) => {
  return (
    <Flex
      {...props}
      w={{ base: '90%', sm: '17%' }}
      flexDirection="column"
      alignItems="center"
    >
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
        <Image src={imageUrl} maxHeight="90%" maxWidth="70%" />
      </Flex>
      <Text marginTop="10%" color="brown.300" variant={'body' as any}>
        {title}
      </Text>
    </Flex>
  )
}
