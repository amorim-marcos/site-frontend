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
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CategoryContext } from 'views/Canal-BNK/index'

export type Path = {
  title: string
  url: string
}

export type PagebarProps = {
  paths?: Array<Path>
}
export const Pagebar = ({ paths }: PagebarProps) => {
  const { seeOnlyPosts, setSeeOnlyPosts } = useContext(CategoryContext)
  const router = useRouter()
  const pagebar = useTranslation('pagebar')
  return (
    <Flex
      display={{ base: 'none', sm: 'flex' }}
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
            data-testid="house-icon"
            width={{
              base: '26px',
              sm: '13px',
              md: '16px',
              lg: '19px',
              xl: '22px',
              '2xl': '26px'
            }}
            color="white.100"
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
      <Flex alignItems="center" zIndex="docked" w="100%">
        <Breadcrumb
          marginLeft="70px"
          separator={
            <Box
              marginX={{
                base: '83px',
                sm: '0px',
                md: '3px',
                lg: '6px',
                xl: '9px',
                '2xl': '10px'
              }}
            >
              <ArrowIcon
                width={{
                  base: '14px',
                  sm: '6px',
                  md: '8px',
                  lg: '10px',
                  xl: '12px',
                  '2xl': '14px'
                }}
                stroke="white.100"
              />
            </Box>
          }
        >
          {paths &&
            paths.map((s, i) => {
              return (
                <BreadcrumbItem key={i} isCurrentPage={i === paths.length - 1}>
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
                        (i === paths.length - 1
                          ? 'breadcrumbs-selected'
                          : 'breadcrumbs') as any
                      }
                    >
                      {s.title}
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )
            })}
        </Breadcrumb>

        <Flex
          _hover={{ opacity: '0.6' }}
          onClick={() => {
            if (seeOnlyPosts) {
              setSeeOnlyPosts(false)
            } else {
              router.back()
            }
          }}
          alignItems="center"
          marginLeft="auto"
        >
          <Box
            transform="rotate(180deg)"
            marginRight={{
              base: '83px',
              sm: '0px',
              md: '3px',
              lg: '6px',
              xl: '9px',
              '2xl': '10px'
            }}
          >
            <ArrowIcon
              width={{
                base: '14px',
                sm: '6px',
                md: '8px',
                lg: '10px',
                xl: '12px',
                '2xl': '15px'
              }}
              stroke="green.800"
            />
          </Box>
          <Text
            color="green.900"
            cursor="pointer"
            variant={'breadcrumbs' as any}
            fontSize={{
              base: '8px',
              sm: '12px',
              md: '14px',
              lg: '16.5px',
              xl: '19px',
              '2xl': '23.5px'
            }}
          >
            {pagebar.t('backBtn')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
