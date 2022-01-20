import { Heading, Flex, Box, Text, Image } from '@chakra-ui/react'
import { PanelProduct } from './PanelProduct/PanelProduct'

export type PlusPanelsPresentationProps = {
  title?: string
}
export const PlusPanelsPresentation = ({
  title
}: PlusPanelsPresentationProps) => {
  return (
    <Box maxWidth="1920px" marginX="auto" padding="5%">
      <Text variant={'productTitle' as any}>
        Conheça os painéis PLUS BERNECK®
      </Text>
      <Flex
        marginTop={{
          base: '20px',
          sm: '30px',
          md: '40px',
          lg: '50px',
          xl: '60px',
          '2xl': '80px'
        }}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <PanelProduct
          title="HDF PLUS BERNECK®"
          description="Painel de Fibra de Alta Densidade com Resistência Extra à Umidade"
          imageProps={{
            src: '/img/hdf_plus.png',
            w: {
              base: '600px',
              sm: '320px',
              md: '426px',
              lg: '533px',
              xl: '640px',
              '2xl': '800px'
            },
            maxWidth: '800px',
            top: {
              base: '-3%',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '0px',
              '2xl': '-3%'
            },
            right: {
              base: '-250px',
              sm: '-150px',
              md: '-200px',
              lg: '-250px',
              xl: '-290px',
              '2xl': '-350px'
            },
            _hover: {
              top: '-1.5%',
              right: '-330px'
            }
          }}
        />

        <PanelProduct
          title="MDF PLUS BERNECK®"
          description="Painel de Fibra de Média Densidade com Resistência Extra à Umidade"
          imageProps={{
            src: '/img/mdf_plus_small.png',
            w: {
              base: '400px',
              sm: '220px',
              md: '293px',
              lg: '366px',
              xl: '440px',
              '2xl': '550px'
            },
            maxWidth: '550px',
            top: {
              base: '-100px',
              sm: '-40px',
              md: '-60px',
              lg: '-80px',
              xl: '-110px',
              '2xl': '-120px'
            },
            right: {
              base: '0px',
              sm: '0px',
              md: '0px',
              lg: '0px',
              xl: '-40px',
              '2xl': '-50px'
            },
            _hover: {
              top: '-100px',
              right: '-30px'
            }
          }}
        />

        <PanelProduct
          title="MDP PLUS BERNECK®"
          description="Painel de Partículas de Média Densidade com Resistência Extra à Umidade"
          imageProps={{
            src: '/img/mdp_plus.png',
            w: {
              base: '400px',
              sm: '220px',
              md: '293px',
              lg: '366px',
              xl: '440px',
              '2xl': '550px'
            },
            maxWidth: '100vw',
            top: {
              base: '0px',
              sm: '1px',
              xl: '-40px',
              '2xl': '-40px'
            },
            right: {
              base: '-50px',
              sm: '0px',
              xl: '-65px',
              '2xl': '-50px'
            },
            _hover: {
              top: '-20px',
              right: '-1px'
            }
          }}
        />
      </Flex>
    </Box>
  )
}
