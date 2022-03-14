import { Image, Flex, FlexProps, Box, Text } from '@chakra-ui/react'
import ArrowIcon from '@components/Icons/ArrowIcon'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { StringIfPlural } from 'react-i18next'

export interface ChannelBnkRelationalItemProps extends FlexProps {
  categoryTitle: string 
  categoryId: number
  url_code: string
  title: string
  color: string
  urlImage: string
}
export const ChannelBnkRelationalItem = ({
  categoryTitle,
  categoryId,
  url_code,
  urlImage,
  title,
  color,
  ...props
}: ChannelBnkRelationalItemProps) => {
  const [mouseDown, setMouseDown] = useState(false)
  const router = useRouter()

  function navigateToThePost() {
    router.push(
      `/canal-bnk/${categoryId}/${url_code}`
    )
  }

  return (
    <Flex
      onMouseEnter={() => setMouseDown(true)}
      onMouseLeave={() => setMouseDown(false)}
      flexDirection="column"
      marginRight={{ base: '40px', md: '0' }}
      w={{ base: '60vw', md: '22%' }}
      minWidth={{ base: '60vw', sm: '50vw', md: '0' }}
      {...props}
      cursor="pointer"
      onClick={navigateToThePost}
    >
      <Box
        h={{
          base: '200px',
          sm: '250px',
          md: '150px',
          lg: '200px',
          '2xl': '300px'
        }}
        w="100%"
      >
        <Image h="100%" w="100%" objectFit="cover" src={urlImage} />
      </Box>
      <Flex
        w="100%"
        bg="white.100"
        flexDirection="column"
        justifyContent="space-between"
        h="50%"
      >
        <Flex padding="8%" flexDirection="column">
          <Flex alignItems="center">
            <ArrowIcon stroke={color} width="5%" />
            <Text marginLeft="3%" color="gray.400">
              {categoryTitle}
            </Text>
          </Flex>
          <Text
            marginTop="8%"
            variant={'breadcrumbs-selected' as any}
            color="green.800"
          >
            {title}
          </Text>
        </Flex>
        <Box
          transition={'0.5s'}
          width={mouseDown ? '80%' : '50%'}
          borderBottom="solid"
          borderBottomWidth={{
            base: '1px',
            sm: '2px',
            md: '3px',
            lg: '4px',
            xl: '5px',
            '2xl': '6px'
          }}
          borderBottomColor={color}
          marginLeft="10%"
        />
      </Flex>
    </Flex>
  )
}
