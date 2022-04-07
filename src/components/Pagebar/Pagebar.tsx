import { useContext } from 'react'
import { useRouter } from 'next/router'

import {
  Flex,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

import { HouseIcon, Arrow } from '@components/Icons'
import { PagebarGrafism } from './PagebarGrafism/PagebarGrafism'
import { useTranslation } from 'react-i18next'

import { CategoryContext } from 'views/Canal-BNK/index'

export type Path = {
  title: string
  url: string
}

export type PagebarProps = {
  paths?: Array<Path>
  disconsiderCurrentPage?: boolean
}
export const Pagebar = ({
  paths,
  disconsiderCurrentPage = true
}: PagebarProps) => {
  const { seeOnlyPosts, setSeeOnlyPosts } = useContext(CategoryContext)
  const pagebar = useTranslation('pagebar')
  const router = useRouter()

  return (
  <Box
    bg="green.650"
    bgGradient='linear(to-r, green.650, green.950)'
  >
    <Flex
      display={{ base: 'none', sm: 'flex' }}
      maxWidth="1536px"
      alignItems="center"
      justifyContent="space-between"
      bg="green.950"
      aria-label="pagebar-container"
      marginX="auto"
      h={{
        base: '83px',
        sm: '35px',
        md: '40px',
        lg: '45px',
        xl: '45px'
      }}
      // paddingLeft={{ base: '8%', sm: '4%', md: '7%', lg: '6%' }}
      // paddingRight={{ base: '2%', '2xl': '2%'  }}
      position="relative"
      zIndex="base"
    >

      <Flex
        // bg="crimson"
        flex="1"
      >
        <Box 
          // position="absolute" 
          left="0" 
          zIndex="base"
        >
          <PagebarGrafism
            height={{
              base: '83px',
              sm: '35px',
              md: '40px',
              lg: '45px',
              xl: '45px'
            }}
          />
        </Box>

      </Flex>

      <Flex 
        alignItems="left" 
        zIndex="docked" 
        // w="100%"
        // bg="blue"
        flex="12"
        marginX={{
          base: '83px',
          sm: '2%',
          md: '1%',
          lg: '1%',
          xl: '1%',
          '2xl': '0'
        }}
      >
        <Breadcrumb
          separator={
            <Box
              
            >
              <Arrow
                width={{
                  base: '14px',
                  sm: '6px',
                  md: '8px',
                  lg: '10px',
                  xl: '11px'
                }}
                color="white.100"
              />
            </Box>
          }
        >
          {paths &&
            paths.map((s, i) => {
              return (
                <BreadcrumbItem
                  key={i}
                  isCurrentPage={
                    disconsiderCurrentPage && i === paths.length - 1
                  }
                >
                  <BreadcrumbLink color="white.100" href={s.url}>
                    <Text
                      color="white.100"
                      fontSize={{
                        base: '8px',
                        sm: '11px',
                        md: '12px',
                        lg: '13px',
                        xl: '14px'
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
          marginRight={{
            base: '83px',
            sm: '5px',
            md: '8px',
            lg: '6px',
            xl: '10px',
            '2xl': '10px'
          }}
        >
          <Box
            transform="rotate(180deg)"
            marginRight={{
              base: '83px',
              sm: '5px',
              md: '8px',
              lg: '6px',
              xl: '10px',
              '2xl': '10px'
            }}
          >
            <Arrow
              width={{
                base: '14px',
                sm: '6px',
                md: '8px',
                lg: '10px',
                xl: '12px'
              }}
              color="green.800"
            />
          </Box>
          <Text
            color="green.900"
            cursor="pointer"
            variant={'breadcrumbs' as any}
            fontSize={{
              base: '8px',
              sm: '11px',
              md: '12px',
              lg: '13px',
              xl: '14px'
            }}
          >
            {pagebar.t('backBtn')}
          </Text>
        </Flex>
      
      </Flex>


    </Flex>
  


  </Box>
   
  )
}
