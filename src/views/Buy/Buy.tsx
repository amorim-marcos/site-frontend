import { Flex, Box, Text, Image } from '@chakra-ui/react'
import CompletedTitle from '@components/CompletedTitle'
import { EarthIcon } from '@components/Icons'
import { BrasilIcon } from '@components/Icons/BrasilIcon/BrasilIcon'
import Pagebar from '@components/Pagebar'
import WhereBuyTable from '@components/WhereBuyTable'
import useMobile from 'hooks/useMobile'
import { useState } from 'react'
import { colors } from '../../theme/colors'

export const Buy = () => {
  const [locationBrasil, setLocationBrasil] = useState(true)
  const { isMobile } = useMobile(568)
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Onde Comprar',
            url: '/'
          }
        ]}
      />

      <Flex
        maxWidth="1536px"
        marginX="auto"
        alignItems="start"
        justifyContent="center"
        position="relative"
        zIndex="base"
        overflowY="hidden"
        overflowX="hidden"
        bg="white.100"
        padding="5%"
        flexDirection={'column'}
      >
        <Image
          src="/img/onde-comprar/grafismo.svg"
          position={'absolute'}
          left={{ base: '20%', sm: '40%' }}
          top="-63%"
          maxWidth={{ base: '150vw', sm: '1757px' }}
          width={{ base: '150vw', sm: '91vw' }}
          zIndex={'base'}
        />
        <Box zIndex={'docked'}>
          <CompletedTitle
            titleString="Onde Comprar"
            alignSelf={isMobile ? 'center' : 'left'}
            textAlign={isMobile ? 'center' : 'left'}
          />
        </Box>
        <Text
          marginTop="4%"
          w={{ base: '100%', md: '50%' }}
          variant={'body' as any}
          color="brown.350"
          zIndex={'docked'}
        >
          Os produtos BERNECK® podem ser encontrados nos melhores móveis e
          revendas do Brasil e do mundo. Confira abaixo os pontos de revenda
          mais próximos a você.
        </Text>
      </Flex>

      <Flex padding="25px 0" w="100%" bg="green.400" justifyContent={'center'}>
        <Flex
          border="1px solid"
          borderColor={'green.600'}
          borderRadius={'15px'}
          overflow="hidden"
          w={{ base: '95%', sm: 'auto' }}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            bg={locationBrasil ? 'green.600' : 'none'}
            width={{
              base: '50%',
              sm: '92px',
              md: '122px',
              lg: '153px',
              xl: '184px',
              '2xl': '230px'
            }}
            height={{
              base: '50px',
              sm: '24px',
              md: '32px',
              lg: '40px',
              xl: '48px',
              '2xl': '60px'
            }}
            cursor={'pointer'}
            _hover={{ opacity: '0.8' }}
            onClick={() => setLocationBrasil(true)}
          >
            <BrasilIcon
              width={{
                base: '30px',
                sm: '16px',
                md: '21px',
                lg: '26px',
                xl: '32px',
                '2xl': '40px'
              }}
              stroke={locationBrasil ? 'white.100' : 'gray.400'}
            />

            <Text
              whiteSpace={'nowrap'}
              variant={'body' as any}
              color={locationBrasil ? 'white.100' : 'gray.400'}
              marginLeft={'5%'}
            >
              NO BRASIL
            </Text>
          </Flex>

          <Flex
            width={{
              base: '50%',
              sm: '92px',
              md: '122px',
              lg: '153px',
              xl: '184px',
              '2xl': '230px'
            }}
            height={{
              base: '50px',
              sm: '24px',
              md: '32px',
              lg: '40px',
              xl: '48px',
              '2xl': '60px'
            }}
            bg={locationBrasil ? 'none' : 'green.600'}
            alignItems={'center'}
            justifyContent={'center'}
            cursor={'pointer'}
            _hover={{ opacity: '0.6' }}
            onClick={() => setLocationBrasil(false)}
          >
            <Text
              whiteSpace={'nowrap'}
              variant={'body' as any}
              marginRight={'5%'}
              color={locationBrasil ? 'gray.400' : 'white.100'}
            >
              NO MUNDO
            </Text>
            <EarthIcon
              width={{
                base: '30px',
                sm: '16px',
                md: '21px',
                lg: '26px',
                xl: '32px',
                '2xl': '40px'
              }}
              stroke1={locationBrasil ? colors.green[600] : colors.white[100]}
              stroke2={locationBrasil ? colors.gray[400] : colors.white[100]}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={'100%'}
        overflowX="scroll"
        h={locationBrasil ? { base: '100vh', sm: '800px' } : 'auto'}
        bg="gray.100"
        padding="5%"
      >
        {locationBrasil ? (
          <iframe
            width={'100%'}
            height={'100%'}
            src="https://berneck.pertinhodemim.com"
            frameBorder="0"
          ></iframe>
        ) : (
          <Box minWidth={'1536px'} w="100%">
            <WhereBuyTable />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
