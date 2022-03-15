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
          <Flex 
            alignItems="flex-start"
            justifyContent={"flex-start"}
            // bg = "red"
          >
            <ArrowIcon 
              stroke={color} 
              width = {{
                base: '5%',
                md: '8%',
                lg: '10%',
                xl: '5%'
              }}
            />
            <Text as="h5" 
              variant={'h5' as any}
              marginLeft="3%" 
              color="gray.400"
              marginTop = {{
                base: '-4px',
                md: '-5px',
                lg: '-4px',
                xl: '-4px'
              }}
            >
              {categoryTitle}
            </Text>
          </Flex>
          <Text
            marginTop= {{
              base: '10px',
              sm: '15px',
              md: '10px',
              lg: '18px',
              xl: '20px'
            }}
            variant={'breadcrumbs-selected' as any}
            color="green.800"
            lineHeight = {{
              base: '14px',
              sm: '18px',
              md: '20px',
              lg: '25px',
              xl: '30px'
            }}
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
