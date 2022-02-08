import {
  Box,
  GridItem,
  Grid,
  Flex,
  Container,
  Wrap,
  Heading,
  Spacer
} from '@chakra-ui/react'
import Pagebar from '@components/Pagebar'
import CompletedTitle from '@components/CompletedTitle'
import BannerProducts from '@components/BannerProducts'

export const Products = () => (
  <Box maxWidth="1920px" marginX="auto" bg="white.100">
    <Pagebar
      paths={[
        {
          title: 'Produtos BERNECK®',
          url: 'products'
        }
      ]}
    />

    {/* INICIO TITULO PRODUTOS */}
    <Flex
      maxWidth="1920px"
      marginX="auto"
      position="relative"
      zIndex="base"
      overflowY="hidden"
      overflowX="hidden"
      bg="white"
    >
      <Flex
        // bg='grey'
        direction={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row'
        }}
        margin={{
          base: '3% 0% 0% 3%',
          sm: '3% 0% 0% 3%',
          lg: '3% 0% 0% 3%',
          xl: '3% 0% 0% 3%'
        }}
      >
        <CompletedTitle
          titleString="Nossos Produtos"
          textAlign={{
            base: 'left',
            sm: 'left',
            lg: 'left',
            xl: 'left'
          }}
          alignSelf={{
            base: 'flex-start',
            sm: 'flex-start',
            lg: 'flex-start',
            xl: 'flex-start'
          }}
        />
      </Flex>
    </Flex>
    {/* FIM TITULO PRODUTOS */}

    {/* INICIO BANNERS PRODUTOS */}
    <Grid
      h={{
        base: '1800px',
        sm: '1300px',
        lg: '1300px',
        xl: '1400px',
        '2xl': '1885px'
      }}
      w={{ base: '90%', sm: '93%', lg: '93%', xl: '93%' }}
      margin={{ base: '5%', sm: '3% 3%', lg: '3% 3%', xl: '3% 3%' }}
      templateRows={{
        base: 'repeat(7, 1fr)',
        sm: 'repeat(4, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(3, 1fr)'
      }}
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(3, 1fr)'
      }}
      gap={{ base: '5', sm: '4', lg: '8', xl: '10' }}
    >
      <GridItem colSpan={{ base: '1', sm: '2', lg: '2', xl: '2' } as any}>
        <BannerProducts
          title="BP BERNECK®"
          titleColor="white"
          subtitle="Laminado Melamínico Decorativo"
          subtitleColor="brown.200"
          bgColor="brown.300"
          srcImg="img/mdf.png"
          onClick={() => alert('Ir para BP')}
          bannerSize={{ base: '30px', sm: '20px', lg: '30px', xl: '35px' }}
          sizeType="rectangle"
        />
      </GridItem>

      <GridItem>
        <BannerProducts
          title="PLUS BERNECK®"
          titleColor="white"
          subtitle="Linha de Painéis com Resistência Extra à Umidade"
          subtitleColor="brown.350"
          bgColor="green.400"
          srcImg="img/plus.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
        />
      </GridItem>

      <GridItem>
        <BannerProducts
          title="HDF BERNECK®"
          titleColor="grey.400"
          subtitle="Painel de Fibra de Alta Densidade"
          subtitleColor="grey.400"
          bgColor="brown.200"
          srcImg="img/hdf.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
        />
      </GridItem>

      <GridItem>
        <BannerProducts
          title="MDF BERNECK®"
          titleColor="grey.400"
          subtitle="Painel de Fibra de Média Densidade"
          subtitleColor="grey.400"
          bgColor="brown.200"
          srcImg="img/mdf.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
        />
      </GridItem>
      <GridItem>
        <BannerProducts
          title="MDP BERNECK®"
          titleColor="grey.400"
          subtitle="Painel de Partículas de Média Densidade"
          subtitleColor="grey.400"
          bgColor="brown.200"
          srcImg="img/mdp.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
        />
      </GridItem>

      <GridItem>
        <BannerProducts
          title="BERNECK® TECA"
          titleColor="grey.400"
          subtitle="Madeira Serrada de Teca"
          subtitleColor="grey.400"
          bgColor="brown.250"
          srcImg="img/teca.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
        />
      </GridItem>

      <GridItem colSpan={{ base: '1', sm: '1', lg: '2', xl: '2' } as any}>
        <BannerProducts
          title="BERNECK® PINUS"
          titleColor="green.900"
          subtitle="Madeira Serrada de Pinus"
          subtitleColor="grey.400"
          bgColor="green.300"
          srcImg="img/pinus.png"
          onClick={() => alert('Ir para Produto')}
          bannerSize={{ base: '5%', sm: '20px', lg: '30px', xl: '35px' }}
          sizeType="rectangle"
        />
      </GridItem>
    </Grid>
    {/* FIM BANNERS PRODUTOS */}
  </Box>
)
