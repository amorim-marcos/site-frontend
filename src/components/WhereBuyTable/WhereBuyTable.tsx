import { Flex, Text, FlexProps, Image } from '@chakra-ui/react'
import useMobile from 'hooks/useMobile'

const cellStyle: FlexProps = {
  w: '16.666667%',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: 'gray.100',
  h: '80px'
}

const cellBodyStyle: FlexProps = {
  w: '16.66667%',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: 'gray.100',
  minHeight: '80px',
  bg: 'white.100',
  padding: '0 5px',
  textAlign: 'center'
}
export const WhereBuyTable = () => {
  const { isMobile } = useMobile(768)
  return (
    <Flex w="100%" maxWidth={'1536px'} flexDirection={'column'} marginX="auto">
      <Flex bg="green.400" w="100%">
        <Flex {...cellStyle} w="10%">
          <Text variant={'body' as any}>PAÍS</Text>
        </Flex>
        <Flex w="90%">
          <Flex {...cellStyle} {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>CIDADE</Text>
          </Flex>
          <Flex {...cellStyle} {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>CLIENTE</Text>
          </Flex>
          {!isMobile && (
            <Flex {...cellStyle} w="13.6667%">
              <Text variant={'body' as any}>NOME FANTASIA</Text>
            </Flex>
          )}
          <Flex {...cellStyle} w="33.333%" {...(isMobile && { width: '40%' })}>
            <Text variant={'body' as any}>ENDEREÇO</Text>
          </Flex>
          <Flex {...cellStyle} w="19.6667%" {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>CONTATO</Text>
          </Flex>
        </Flex>
      </Flex>
      {data.countries.map((c, i) => {
        return (
          <Flex key={i} bg="green.400" w="100%">
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              bg="white.100"
              w="10%"
              css={{
                height: 'full'
              }}
              border="1px solid"
              borderColor="gray.100"
            >
              <Image marginY="10px" src={c.imgUrl} w="40px" />
              <Text variant={'body' as any}>{c.name}</Text>
            </Flex>
            <Flex w="90%" flexDirection={'column'}>
              {c.rows.map((r, i) => {
                return (
                  <Flex key={i} w="100%">
                    <Flex
                      {...cellBodyStyle}
                      {...(isMobile && { width: '20%' })}
                    >
                      <Text variant={'body' as any}>{r.city}</Text>
                    </Flex>
                    <Flex
                      {...cellBodyStyle}
                      {...(isMobile && { width: '20%' })}
                    >
                      <Text variant={'body' as any}>{r.client}</Text>
                    </Flex>
                    {!isMobile && (
                      <Flex {...cellBodyStyle} w="13.66667%">
                        <Text variant={'body' as any}>{r.nameFantasy}</Text>
                      </Flex>
                    )}
                    <Flex
                      {...cellBodyStyle}
                      w="33.3333%"
                      {...(isMobile && { width: '40%' })}
                    >
                      <Text variant={'body' as any} fontSize={'100%'}>
                        {r.address}
                      </Text>
                    </Flex>
                    <Flex
                      {...cellBodyStyle}
                      w="19.66667%"
                      {...(isMobile && { width: '20%' })}
                    >
                      <Text variant={'body' as any} fontSize={'90%'}>
                        {r.contact}
                      </Text>
                    </Flex>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}

const data = {
  countries: [
    {
      name: 'Bolívia',
      imgUrl: '/img/onde-comprar/bolivia.svg',
      id: 0,
      rows: [
        {
          city: 'Santa Cruz de la Sierra',
          client: 'Schwartz Vrena',
          nameFantasy: 'Schwartz Vrena',
          address: 'Av. Japón, 3500',
          contact: '+591 3346 6642 www.schwartzvrena.com'
        },
        {
          city: 'Cochabamba',
          client: 'Multilaminas de Guaman',
          nameFantasy: 'Multilaminas',
          address: 'Av. Blanco Galindo, 3352',
          contact: '+591 7691 3313'
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona 16 de julio, Calle Víctor Gutiérrez 3351',
          contact: '+591 715 78106'
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona Bautista Saavedra F, Av Panamericana 4465',
          contact: '+591 715 78106'
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona 16 de febrero, Av Santa Fe casi esq Av 1ro de Mayo',
          contact: '+591 715 78106'
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address:
            'Zona 16 de julio, Calle Gutiérrez, entre Álvarez Plata y Catacora 3315',
          contact: '+591 715 78106'
        },
        {
          city: 'El Alto',
          client: 'Wilson Suxo Quispe',
          nameFantasy: 'Tecmadeplac',
          address:
            'Av Juan Pablo II N 100 entre Juan Manuel Carpio y calle Adolfo Borda Zona Los Andes',
          contact: '+591 715 41388'
        }
      ]
    },
    {
      name: 'Colômbia',
      imgUrl: '/img/onde-comprar/colombia.svg',
      id: 1,
      rows: [
        {
          city: 'Soledad',
          client: 'CIMCA/Madeflex',
          nameFantasy: 'CIMCA/Madeflex',
          address: 'Cll 15 # 26A - 50, Soledad, Atlantico',
          contact: '+57 5375 9450'
        }
      ]
    },
    {
      name: 'EUA',
      imgUrl: '/img/onde-comprar/eua.svg',
      id: 2,
      rows: [
        {
          city: 'Hialeah/Florida',
          client: 'Market Wood',
          nameFantasy: 'Market Wood',
          address: '2396 W 77th Street Hialeah Florida 33016',
          contact: '+1 (305) 4562557 www.market-wood.com'
        }
      ]
    },
    {
      name: 'Paraguai',
      imgUrl: '/img/onde-comprar/paraguay.svg',
      id: 3,
      rows: [
        {
          city: 'Lambaré',
          client: 'Maveq',
          nameFantasy: 'Maveq',
          address: 'Tte. Mauricio José Troche Esq. Edulfo Duarte',
          contact: '+595 021 925 300 http://maveq.com.py'
        },
        {
          city: 'San Lorenzo',
          client: 'Maveq',
          nameFantasy: 'Maveq',
          address: 'Ruta II Mariscal José Felix Estigarribia y Calle Aratiri',
          contact: '+595 021 238 3180 http://maveq.com.py'
        },
        {
          city: 'Fernando de la Mora',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Arq. Tomas Pereira e/ Cnel. Franco No. 107',
          contact: '+595 520-785 www.saba.com.py'
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Avda. Cacique Lambaré c/ Moises Bertoni',
          contact: '+595 904-447 www.saba.com.py'
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Juan B. Rivarola c/ Avda. Cacique Lambaré',
          contact: '+595 338-948 www.saba.com.py'
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Km. 13,5 Ruta Transchaco c/ Luis Herrera',
          contact: '+595 755-921 www.saba.com.py'
        },
        {
          city: 'San Lorenzo',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'General Eugenio A. Garay c/ Dr. Gabriel Pellon',
          contact: '+595 552-427 www.saba.com.py'
        }
      ]
    },
    {
      name: 'Pamamá',
      imgUrl: '/img/onde-comprar/panama.svg',
      id: 2,
      rows: [
        {
          city: 'Cidade do Panamá',
          client: 'Moby Panamá',
          nameFantasy: 'Moby Panamá',
          address: 'Urb. Parque Lefevre, Via España Edificio. La Garantía.',
          contact: '+595 021 238 3180 https://moby-group.com'
        },
        {
          city: 'Cidade do Panamá',
          client: 'Empresas Melo',
          nameFantasy: 'Melo Multilaminas',
          address: 'Vía Transístmica a lado del antiguo Triángulo',
          contact: '+507 229-3551 www.multilaminaspanama.com'
        },
        {
          city: 'Cidade do Panamá',
          client: 'Empresas Melo',
          nameFantasy: 'Melo Multilaminas',
          address: 'Ave. Domingo Díaz, Llano bonito, Juan Díaz',
          contact: '+570 233-4403 www.multilaminaspanama.com'
        }
      ]
    },
    {
      name: 'Uruguai',
      imgUrl: '/img/onde-comprar/uruguay.svg',
      id: 2,
      rows: [
        {
          city: 'Montevideo',
          client: 'Dubarry',
          nameFantasy: 'Dubarry',
          address: 'Camino Corrales 3076',
          contact: '+598  2200 9293 www.dubarry.com.uy'
        },
        {
          city: 'Montevideo',
          client: 'Barraca Paraná',
          nameFantasy: 'Barraca Paraná',
          address: 'Cno. Benito Berges 4300',
          contact: '+595 021 238 3180 www.barracaparana.com'
        },
        {
          city: 'Montevideo',
          client: 'Barraca Paraná',
          nameFantasy: 'Barraca Paraná',
          address: 'Democracia 2350',
          contact: '+598 2200 0845 www.barracaparana.com'
        },
        {
          city: 'Montevideo',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Democracia 2319',
          contact: '+598 2200 0845 www.barracaparana.com'
        }
      ]
    }
  ]
}
