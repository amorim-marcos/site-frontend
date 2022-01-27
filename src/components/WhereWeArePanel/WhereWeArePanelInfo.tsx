import { ReactNode } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { ResponsiveCss } from 'types/responsive'
import CloseIcon from '@components/Icons/CloseIcon'

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
    >
      <Section title="ESTRUTURA">
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
      </Section>
    </Flex>
  </>
)

const Section = (props: { title: string; children: ReactNode }) => (
  <Flex direction="column" gap={{ md: '4px', xl: '7px' }}>
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
    color={props.color ?? 'grey.350'}
    fontSpacing={{ sm: '-0.3', md: '-20px' }}
    fontWeight={props.fontWeight ?? 'normal'}
    fontSize={
      props.fontSize ?? {
        base: '13px',
        md: '15px',
        xl: '18px',
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
      md: '18px',
      // xl: '18px',
      // '2xl': '18px'
    }}
  >
    {props.content}
  </SectionText>
)

export default WhereWeArePanelInfo
