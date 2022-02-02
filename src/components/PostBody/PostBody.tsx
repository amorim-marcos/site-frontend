import { Flex, Box, Text, Image } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import { SocialIcon } from '@components/Icons'
import ArrowIcon from '@components/Icons/ArrowIcon'

export type PostBodyProps = {
  title?: string
}
export const PostBody = ({ title }: PostBodyProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      maxWidth={{
        base: '320px',
        sm: '568px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }}
      zIndex="docked"
    >
      {/* Post body header */}
      <Flex
        marginTop="3%"
        justifyContent="space-between"
        w="100%"
        alignItems="center"
      >
        {/* Social Media */}
        <Flex flexDirection="column">
          <SocialIcon
            media="facebook"
            marginY="40%"
            marginLeft="50%"
            color="brown.350"
            width="40px"
          />
          <SocialIcon
            media="twitter"
            marginLeft="50%"
            marginY="40%"
            color="brown.350"
            width="40px"
          />
        </Flex>
        {/* End Social media */}

        {/* Title and category */}
        <Flex flexDirection="column">
          <Flex alignItems="center">
            <ArrowIcon width="10px" stroke="green.600" />
            <Text marginLeft="2%" variant={'body' as any}>
              MUNDO BERNECK
            </Text>
          </Flex>
          <CompletedTitle
            titleString="BERNECK® é destaque no prêmio Valor 1000"
            textAlign="left"
            alignSelf="left"
          />
        </Flex>
        {/* End of title and category */}

        {/* Date publish */}
        <Flex paddingRight="3%" h="50px" alignItems="center">
          <Image
            marginRight="15px"
            src="/img/calendario.png"
            w="30px"
            height="30px"
          />
          <Text color="grey.350" variant={'body' as any}>
            30/10/2020
          </Text>
        </Flex>
        {/* End of date publish */}
      </Flex>
      {/* End of post header */}

      {/* Post content */}
      <Text w="50%" marginLeft="15%">
        O jornal Valor Econômico realizou a edição anual do prêmio Valor 1000 e
        escolheu as 25 melhores empresas em seus setores de atuação. Como
        resultado, a BERNECK® foi anunciada como a empresa campeã no setor de
        Materiais de Construção e de Decoração. Este é o sexto ano em que
        figuramos na liderança do segmento. A premiação foi realizada pela
        primeira vez em formato online, com transmissão pelo canal YouTube. A
        cerimônia contou com a participação especial de Fernando Henrique
        Cardoso, presidente do Brasil em 2000, ano de lançamento do jornal. Na
        ocasião, ele fez uma análise da evolução do País nos últimos 20 anos e
        abordou os principais desafios políticos e econômicos na atual
        conjuntura.
      </Text>

      <Text w="50%" marginLeft="15%">
        O jornal Valor Econômico realizou a edição anual do prêmio Valor 1000 e
        escolheu as 25 melhores empresas em seus setores de atuação. Como
        resultado, a BERNECK® foi anunciada como a empresa campeã no setor de
        Materiais de Construção e de Decoração. Este é o sexto ano em que
        figuramos na liderança do segmento. A premiação foi realizada pela
        primeira vez em formato online, com transmissão pelo canal YouTube. A
        cerimônia contou com a participação especial de Fernando Henrique
        Cardoso, presidente do Brasil em 2000, ano de lançamento do jornal. Na
        ocasião, ele fez uma análise da evolução do País nos últimos 20 anos e
        abordou os principais desafios políticos e econômicos na atual
        conjuntura.
      </Text>

      <Text w="50%" marginLeft="15%">
        O jornal Valor Econômico realizou a edição anual do prêmio Valor 1000 e
        escolheu as 25 melhores empresas em seus setores de atuação. Como
        resultado, a BERNECK® foi anunciada como a empresa campeã no setor de
        Materiais de Construção e de Decoração. Este é o sexto ano em que
        figuramos na liderança do segmento. A premiação foi realizada pela
        primeira vez em formato online, com transmissão pelo canal YouTube. A
        cerimônia contou com a participação especial de Fernando Henrique
        Cardoso, presidente do Brasil em 2000, ano de lançamento do jornal. Na
        ocasião, ele fez uma análise da evolução do País nos últimos 20 anos e
        abordou os principais desafios políticos e econômicos na atual
        conjuntura.
      </Text>

      <Text w="50%" marginLeft="15%">
        O jornal Valor Econômico realizou a edição anual do prêmio Valor 1000 e
        escolheu as 25 melhores empresas em seus setores de atuação. Como
        resultado, a BERNECK® foi anunciada como a empresa campeã no setor de
        Materiais de Construção e de Decoração. Este é o sexto ano em que
        figuramos na liderança do segmento. A premiação foi realizada pela
        primeira vez em formato online, com transmissão pelo canal YouTube. A
        cerimônia contou com a participação especial de Fernando Henrique
        Cardoso, presidente do Brasil em 2000, ano de lançamento do jornal. Na
        ocasião, ele fez uma análise da evolução do País nos últimos 20 anos e
        abordou os principais desafios políticos e econômicos na atual
        conjuntura.
      </Text>
      {/* End of post content */}

      {/* Tags sections */}

      <Flex marginY="3%" w="60%" marginLeft="15%" wrap="wrap">
        <TagItem tag="materiais de construção" />
        <TagItem tag="decoração" />
        <TagItem tag="nova fábrica" />
        <TagItem tag="painéis de madeira" />
        <TagItem tag="valor 1000" />
        <TagItem tag="valor econômico" />
      </Flex>

      {/* End of tags section */}
    </Flex>
  )
}

export const TagItem = ({ tag = 'tag' }) => {
  return (
    <Box
      marginRight="2%"
      marginBottom="3%"
      padding="2%"
      bg="white.100"
      borderRadius="20px"
    >
      <Text variant={'body' as any}>{tag}</Text>
    </Box>
  )
}
