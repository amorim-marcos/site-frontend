import { Flex, Image, Text, ImageProps } from '@chakra-ui/react'

export type PanelProductProps = {
  title: string
  description: string
  imageProps: ImageProps
}
export const PanelProduct = ({
  description,
  title,
  imageProps
}: PanelProductProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      padding={{
        base: '50px',
        sm: '20px',

        lg: '30px',
        xl: '40px',
        '2xl': '50px'
      }}
      w={{ base: '90%', sm: '30%' }}
      h={{
        base: '493px',
        sm: '237',
        md: '316px',
        lg: '395px',
        xl: '474px',
        '2xl': '593px'
      }}
      bg="#ACCC9F"
      borderRadius="38px"
      position="relative"
      overflow="hidden"
      marginBottom={{ base: '30px' }}
    >
      <Text
        variant={'productTitle' as any}
        color="white.100"
        marginBottom="5px"
      >
        {title}
      </Text>
      <Text variant={'productBody' as any} color="#626161">
        {description}
      </Text>
      <Image position="absolute" transition="0.5s" {...imageProps} />
    </Flex>
  )
}
