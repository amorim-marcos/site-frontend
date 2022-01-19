import {
  Flex,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import HouseIcon from '@components/Icons/HouseIcon'
import Link from 'next/link'
import { PagebarGrafism } from './PagebarGrafism/PagebarGrafism'
import { useTranslation } from 'react-i18next'

export type Path = {
  title: string
  url: string
}

export type PagebarProps = {
  paths?: Array<Path>
}
export const Pagebar = ({ paths }: PagebarProps) => {
  const pagebar = useTranslation('pagebar')
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="green.500"
      maxWidth="1920px"
      aria-label="pagebar-container"
      marginX="auto"
      h={{
        base: '83px',
        sm: '40px',
        md: '50px',
        lg: '60px',
        xl: '70px',
        '2xl': '83px'
      }}
      paddingLeft={{ base: '8%', sm: '4%', md: '7%', lg: '8%' }}
      paddingRight={{ base: '4%' }}
      position="relative"
      zIndex="base"
    >
      <Box
        zIndex="dropdown"
        cursor="pointer"
        position="absolute"
        top="35%"
        left={{
          base: '120px',
          sm: '57px',
          md: '70px',
          lg: '84px',
          xl: '97px',
          '2xl': '120px'
        }}
      >
        <Link passHref href="/">
          <HouseIcon
            height={{
              base: '26px',
              sm: '13px',
              md: '16px',
              lg: '19px',
              xl: '22px',
              '2xl': '26px'
            }}
          />
        </Link>
      </Box>
      <Box position="absolute" left="0" zIndex="base">
        <PagebarGrafism
          height={{
            base: '83px',
            sm: '40px',
            md: '50px',
            lg: '60px',
            xl: '70px',
            '2xl': '83px'
          }}
        />
      </Box>
      <Flex zIndex="docked" w="100%">
        <Breadcrumb
          marginLeft="70px"
          separator={<Text color="white.100">{'>'}</Text>}
        >
          {paths &&
            paths.map((s, i) => {
              console.log(i, paths.length)
              return (
                <BreadcrumbItem
                  key={s.title}
                  isCurrentPage={i === paths.length - 1}
                >
                  <BreadcrumbLink color="white.100" href={s.url}>
                    <Text
                      color="white.100"
                      fontSize={{
                        base: '8px',
                        sm: '12px',
                        md: '14px',
                        lg: '16.5px',
                        xl: '19px',
                        '2xl': '23.5px'
                      }}
                      variant={
                        i === paths.length - 1
                          ? 'breadcrumbs-selected'
                          : 'breadcrumbs'
                      }
                    >
                      {s.title}
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )
            })}
        </Breadcrumb>

        <Flex alignItems="center" marginLeft="auto">
          <Text
            color="green.900"
            cursor="pointer"
            variant="breadcrumbs"
            fontSize={{
              base: '8px',
              sm: '12px',
              md: '14px',
              lg: '16.5px',
              xl: '19px',
              '2xl': '23.5px'
            }}
            _hover={{ color: 'white.100' }}
          >
            {'< '}
            {pagebar.t('backBtn')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
