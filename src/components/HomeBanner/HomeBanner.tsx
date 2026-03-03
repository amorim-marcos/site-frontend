import { useState } from 'react'

import { Image, Flex, Box, Text, useInterval } from '@chakra-ui/react'

import ArrowIcon from '@components/Icons/ArrowIcon'

import { smartString } from 'utils/utils'
import CustomLink from '@components/CustomLink'
import { HomeBannerItem } from 'types/data/HomeBanner'

export type HomeBannerProps = {
  items: HomeBannerItem[]
}

// export const HomeBanner = ({ items }: HomeBannerProps) => {
export const HomeBanner = ({ items }: HomeBannerProps) => {
  const [opacity, setOpacity] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  function next() {
    let newIndex = 0
    if (currentItem < items.length - 1) {
      newIndex = currentItem + 1
    }
    setOpacity(false)

    setTimeout(() => {
      setCurrentItem(newIndex)

      setOpacity(true)
    }, 400)
  }

  useInterval(next, 5000)

  const linkToUrl = items[currentItem].isPost
    ? `bnk-channel/${items[currentItem]?.category.id}/${items[currentItem].url_code}`
    : items[currentItem]?.linkTo

  return items.length <= 0 ? (
    <h1>No items passed</h1>
  ) : (
    <Box bg="rgb(246, 239, 227, 90%)">
      <Flex
        maxWidth="1536px"
        marginX="auto"
        position="relative"
        overflowY={{ base: 'hidden', xl: 'visible' }}
        overflowX={{ base: 'hidden', xl: 'visible' }}
        bg="brown.100"
        h={{ base: 'auto', md: '40vw' }}
        maxHeight={{ base: 'none', md: '750px' }}
        flexDirection={'column-reverse'}
        paddingBottom={{ md: '10%' }}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          w="100%"
          display={{ base: 'flex', md: 'none' }}
          marginY="5%"
          bg="brown.100"
        >
          <Indicator
            items={items}
            currentItem={currentItem}
            onClick={(i) => setCurrentItem(i)}
          />
        </Flex>
        <CustomLink linkTo={linkToUrl} translatePaths>
          <Image
            alt="Site Banner left grafism"
            src="/assets/imgs/grafismos_home_header/grafismo_esquerda_home.svg"
            position={'absolute'}
            top="10%"
            left="-4%"
            // onClick={navigateToThePost}
            w="12vw"
            maxWidth={'231px'}
            cursor={'pointer'}
            display={{ base: 'none', md: 'block' }}
          />
        </CustomLink>

        <CustomLink linkTo={linkToUrl} translatePaths>
          <Box
            zIndex={'base'}
            position={{ base: 'relative', md: 'absolute' }}
            right={{ base: '0', md: opacity ? '3.5%' : '3%' }}
            top={{ base: '0', md: '15%' }}
            w={{ base: '100vw', md: '60vw' }}
            maxWidth={'1150px'}
            h={{ base: '100vw', md: '28.5vw' }}
            maxHeight={'650px'}
            bg="#c2d898"
            opacity={opacity ? '1' : '0'}
            transition={'0.4s'}
            // onClick={navigateToThePost}
            cursor={'pointer'}
          >
            <Box
              position={'absolute'}
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg={{
                base: 'none',
                md: 'linear-gradient(90deg, rgba(241,224,196,0.76234243697479) 0%, rgba(255,255,255,0) 100%)'
              }}
              cursor="pointer"
              // onClick={navigateToThePost}
            ></Box>

            <Image
              alt={items[currentItem]?.cover?.alternativeText}
              src={items[currentItem].imageUrl}
              objectFit={'cover'}
              w="100%"
              h="100%"
              // onClick={navigateToThePost}
              cursor="pointer"
            />
          </Box>
        </CustomLink>

        <Flex
          flexDirection={'column'}
          position={{ base: 'relative', md: 'absolute' }}
          top={{ base: '0', md: '40%' }}
          left={{ base: '0', md: '9.5%' }}
          marginY={{ base: '7%', md: '0' }}
          paddingLeft={{ base: '20px', md: '0' }}
        >
          <Flex>
            <Box marginTop="0px">
              <ArrowIcon
                width={{
                  base: '7px',
                  md: '9px',
                  lg: '10px',
                  xl: '10px'
                }}
                stroke={items[currentItem].color}
              />
            </Box>
            <CustomLink linkTo={linkToUrl} translatePaths>
              <Flex
                // onClick={navigateToThePost}
                marginLeft={{
                  base: '8px',
                  md: '10px',
                  lg: '10px',
                  xl: '8px'
                }}
                flexDirection={'column'}
                cursor="pointer"
              >
                <Text
                  marginTop={{
                    base: '-3.5px',
                    md: '-3px',
                    lg: '-2px',
                    xl: '-3px'
                  }}
                  as="h5"
                  variant="h5"
                  textColor={'black'}
                  fontSize={{
                    base: '11px',
                    sm: '11px',
                    lg: '11px',
                    xl: '14px'
                  }}
                  letterSpacing={{
                    base: '2px',
                    xl: '2px'
                  }}
                >
                  {/* {items[currentItem].category.name} */}
                  {items[currentItem].subTitle}
                </Text>
                <Box
                  opacity={opacity ? '1' : '0'}
                  transition={'0.4s'}
                  maxWidth={{
                    base: '90vw',
                    md: '450px',
                    lg: '600px',
                    xl: '850px'
                  }}
                  w="100vw"
                  height={{ md: '18vw' }}
                  maxHeight={{ md: '384px' }}
                  marginTop={{
                    base: '12px',
                    md: '10px',
                    lg: '8px',
                    xl: '10px'
                  }}
                >
                  <Text
                    as="h1"
                    variant="h1"
                    color="green.900"
                    fontWeight="bold"
                    lineHeight={{
                      base: '26px',
                      sm: '35px',
                      md: '28px',
                      lg: '36px',
                      xl: '45px'
                    }}
                    fontSize={{
                      base: '22px',
                      sm: '30px',
                      md: '26px',
                      lg: '32px',
                      xl: '40px'
                    }}
                    maxHeight={'100%'}
                    marginLeft={{ base: '-10px', md: '0' }}
                  >
                    {smartString(items[currentItem].title, 150)}
                  </Text>
                </Box>
              </Flex>
            </CustomLink>
          </Flex>
          <Box display={{ base: 'none', md: 'block' }}>
            <Indicator
              items={items}
              currentItem={currentItem}
              onClick={(i: number) => setCurrentItem(i)}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

type IndicatorProps = {
  items: {
    imageUrl: string
    category: {
      name?: string
      id?: number
    }
    title: string
  }[]
  currentItem: number
  onClick: (i: number) => void
}

const Indicator = ({ items, currentItem, onClick }: IndicatorProps) => {
  return (
    <Flex marginLeft={{ md: '4%' }}>
      {items &&
        items.map((_item, i) => {
          return i === currentItem ? (
            <Box
              key={i}
              marginTop={{
                base: '-10px',
                lg: '-25px'
              }}
              marginLeft={'5px'}
              border="1px solid"
              borderColor={'brown.300'}
              w={{
                base: '20px',
                md: '10px',
                lg: '13px',
                xl: '16px',
                '2xl': '20px'
              }}
              h={{
                base: '20px',
                md: '10px',
                lg: '13px',
                xl: '16px',
                '2xl': '20px'
              }}
              cursor={'pointer'}
              bg="brown.350"
            />
          ) : (
            <Box
              key={i}
              marginTop={{
                base: '-10px',
                lg: '-25px'
              }}
              marginLeft={'5px'}
              w={{
                base: '20px',
                md: '10px',
                lg: '13px',
                xl: '16px',
                '2xl': '20px'
              }}
              h={{
                base: '20px',
                md: '10px',
                lg: '13px',
                xl: '16px',
                '2xl': '20px'
              }}
              cursor={'pointer'}
              bg="brown.200"
              onClick={() => onClick(i)}
            />
          )
        })}
    </Flex>
  )
}
