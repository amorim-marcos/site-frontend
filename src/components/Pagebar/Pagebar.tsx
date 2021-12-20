import {
  Flex,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import Link from 'next/link'

export type PagebarProps = {
  paths?: string[]
}
export const Pagebar = ({ paths }: PagebarProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="green.500"
      maxWidth="1920px"
      marginX="auto"
      h="83px"
      paddingLeft="120px"
      paddingRight="100px"
      position="relative"
      zIndex="base"
    >
      <Box position="absolute" left="0" zIndex="base">
        <svg xmlns="http://www.w3.org/2000/svg" width="179.312" height="83">
          <path
            d="M0 0v82.882h147.169l32.142-41.2v-.128L147.169 0Z"
            fill="#6aa353"
          />
          <path
            data-name="Caminho 106"
            d="m98.035 41.501-30.498 41.5h-25.6l30.5-41.5L41.935.001h25.6l30.5 41.5Zm-62.006.27H9.999L34.991 8.046l12.8 17.039Z"
            fill="#8bb879"
          />
        </svg>
      </Box>
      <Flex zIndex="docked" w="100%">
        <Box cursor="pointer">
          <Link passHref href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.768"
              height="23.391"
            >
              <g data-name="Grupo 135">
                <path
                  data-name="Caminho 107"
                  d="M21.451 23.391H5.317a1 1 0 0 1-1-1v-9a1.004 1.004 0 1 1 2.007 0v8h14.127v-8a1.004 1.004 0 1 1 2.007 0v9a1 1 0 0 1-1.007 1Z"
                  fill="#f5f6f4"
                />
              </g>
              <g data-name="Grupo 136">
                <path
                  data-name="Caminho 108"
                  d="M25.764 14.388a1 1 0 0 1-.709-.294L13.38 2.423 1.709 14.094A1.003 1.003 0 1 1 .29 12.676L12.68.294a1 1 0 0 1 1.418 0l12.381 12.381a1 1 0 0 1-.71 1.712Z"
                  fill="#f5f6f4"
                />
              </g>
            </svg>
          </Link>
        </Box>
        <Breadcrumb
          marginLeft="70px"
          separator={<Text color="white.100">{'>'}</Text>}
        >
          {paths &&
            paths.map((s, i) => {
              if (i === paths.length - 1) {
                return (
                  <BreadcrumbItem key={s} isCurrentPage>
                    <BreadcrumbLink color="white.100" href="#">
                      <Text color="white.100" variant="breadcrumbs-selected">
                        {s}
                      </Text>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )
              } else {
                return (
                  <BreadcrumbItem key={s}>
                    <BreadcrumbLink color="white.100" href="#">
                      <Text color="white.100" variant="breadcrumbs">
                        {s}
                      </Text>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )
              }
            })}
        </Breadcrumb>

        <Flex marginLeft="auto">
          <Text
            color="green.900"
            cursor="pointer"
            variant="breadcrumbs"
            _hover={{ color: 'white.100' }}
          >
            {'< '}Voltar
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
