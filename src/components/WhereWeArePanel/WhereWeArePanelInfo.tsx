import { ReactNode } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { CloseIcon, Arrow } from '@components/Icons'
import { ResponsiveCss } from 'types/responsive'

export type WhereWeArePanelInfoProps = {
  structure: string
  localization: string
  phones: string
  airportDistance: string
  onClose: () => void
}

const WhereWeArePanelInfo = (props: WhereWeArePanelInfoProps) => (
  <>
    <Box
      top="10px"
      right="15px"
      pos="absolute"
      cursor="pointer"
      transition={`all 0.2s ease-in-out`}
      _hover={{ filter: 'brightness(0.8)' }}
    >
      <CloseIcon onClick={props.onClose} boxSize={['14px']} />
    </Box>

    <Flex
      justifyContent="space-around"
      direction="column"
      padding={{
        base: '25px 15px 15px',
        sm: '10px 15px',
        md: '20px 30px',
        lg: '30px 35px',
        xl: '20px 25px'
      }}
      w="100%"
    >
      <Section2 bodyText={props.structure} title="ESTRUTURA" />

      <Section2 bodyText={props.localization} title="LOCALIZAÇÃO" />

      <Section2 bodyText={props.phones} title="TELEFONES" />

      <Section2
        bodyText={props.airportDistance}
        title="DISTÂNCIA DO AEROPORTO"
      />

      {/* <Section title="ESTRUTURA">
        <SectionContent content={props.structure} />
      </Section>

      <Section title="LOCALIZAÇÃO">
        <SectionContent content={props.localization} />
      </Section>

      <Section title="TELEFONES">
        <SectionContent content={props.phones} />
      </Section>

      <Section title="DISTÂNCIA DO AEROPORTO">
        <SectionContent content={props.airportDistance} />
      </Section> */}
    </Flex>
  </>
)

const Section2 = (props: { title: string; bodyText: string }) => {
  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'center'}>
        <Arrow width="12px" stroke="green.600" />
        <Text ml="5px" variant={'body' as any} color="green.600">
          {props.title}
        </Text>
      </Flex>
      <Text variant={'body' as any}>{props.bodyText}</Text>
    </Flex>
  )
}

const Section = (props: { title: string; children: ReactNode }) => (
  <Flex
    direction="column"
    // gap={{ md: '4px', xl: '7px' }}
  >
    <SectionTitle title={props.title} />
    {props.children}
  </Flex>
)

const SectionText = (props: {
  color?: string
  fontWeight?: string
  fontSize?: ResponsiveCss
  children: ReactNode
}) => (
  <Flex
    alignItems="center"
    color={props.color ?? 'gray.350'}
    letterSpacing={{ sm: '-0.3', md: '-20px' }}
    fontWeight={props.fontWeight ?? 'normal'}
    fontSize={
      props.fontSize ?? {
        base: '13px',
        md: '15px',
        xl: '18px'
        // '2xl': '18px'
      }
    }
  >
    {props.children}
  </Flex>
)

const SectionTitle = (props: { title: string }) => (
  <SectionText color="green.600" fontWeight="medium">
    <Flex align="center" direction="row" gap="7px">
      <Arrow />
      <Image h="7px" w="9px" src="icon/icon_arrow_right.svg" />
      {props.title}
    </Flex>
  </SectionText>
)

const SectionContent = (props: { content: string }) => (
  <SectionText
    fontSize={{
      base: '12px',
      sm: '13px',
      md: '18px'
    }}
  >
    {props.content}
  </SectionText>
)

export default WhereWeArePanelInfo
