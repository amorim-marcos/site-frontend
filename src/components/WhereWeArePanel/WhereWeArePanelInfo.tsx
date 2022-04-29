import { Box, Flex, Text } from '@chakra-ui/react'

import { CloseIcon, Arrow } from '@components/Icons'
import { useTranslation } from 'react-i18next'

export type WhereWeArePanelInfoProps = {
  structure: string
  localization: string
  phones: string
  airportDistance: string
  onClose: () => void
}

const WhereWeArePanelInfo = (props: WhereWeArePanelInfoProps) => {
  const componentsLabels = useTranslation('components')
  return (
    <>
      <Box overflowY={'scroll'}>
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
          <Section
            bodyText={props.structure}
            title={componentsLabels.t('whereWeArePanel.structure')}
          />

          <Section
            bodyText={props.localization}
            title={componentsLabels.t('whereWeArePanel.location')}
          />

          <Section
            bodyText={props.phones}
            title={componentsLabels.t('whereWeArePanel.phones')}
          />

          <Section
            bodyText={props.airportDistance}
            title={componentsLabels.t('whereWeArePanel.airportsDistance')}
          />
        </Flex>
      </Box>
    </>
  )
}

const Section = (props: { title: string; bodyText: string }) => {
  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'center'}>
        <Arrow width="12px" color="green.600" />
        <Text ml="5px" variant="body" color="green.600">
          {props.title}
        </Text>
      </Flex>
      <Text variant="body">{props.bodyText}</Text>
    </Flex>
  )
}

export default WhereWeArePanelInfo
