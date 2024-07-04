import { Flex, Text, FlexProps, Image } from '@chakra-ui/react'
import useMobile from 'hooks/useMobile'
import { useTranslation } from 'react-i18next'

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
  const componentsLabels = useTranslation('components')
  return (
    <Flex w="100%" maxWidth={'1536px'} flexDirection={'column'} marginX="auto">
      <Flex bg="green.400" w="100%">
        <Flex {...cellStyle} w="10%">
          <Text variant={'body' as any}>
            {componentsLabels.t('whereBuyTable.country')}
          </Text>
        </Flex>
        <Flex w="90%">
          <Flex {...cellStyle} {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>
              {componentsLabels.t('whereBuyTable.city')}
            </Text>
          </Flex>
          <Flex {...cellStyle} {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>
              {componentsLabels.t('whereBuyTable.client')}
            </Text>
          </Flex>
          {!isMobile && (
            <Flex {...cellStyle} w="13.6667%">
              <Text variant={'body' as any}>
                {componentsLabels.t('whereBuyTable.fantasyName')}
              </Text>
            </Flex>
          )}
          <Flex {...cellStyle} w="33.333%" {...(isMobile && { width: '40%' })}>
            <Text variant={'body' as any}>
              {componentsLabels.t('whereBuyTable.address')}
            </Text>
          </Flex>
          <Flex {...cellStyle} w="19.6667%" {...(isMobile && { width: '20%' })}>
            <Text variant={'body' as any}>
              {componentsLabels.t('whereBuyTable.contact')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {data.countries &&
        data.countries.map((c, i) => {
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
                {c.rows &&
                  c.rows.map((r, i) => {
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
                          <Flex flexDirection={'column'}>
                            {r?.contact?.map((item) => (
                              <Text variant={'body' as any} fontSize={'90%'}>
                                {item}
                              </Text>
                            ))}
                          </Flex>
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
          contact: ['+591 3346 6642', 'www.schwartzvrena.com']
        },
        {
          city: 'Cochabamba',
          client: 'Multilaminas de Guaman',
          nameFantasy: 'Multilaminas',
          address: 'Av. Blanco Galindo, 3352',
          contact: ['+591 7691 3313']
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona 16 de julio, Calle Víctor Gutiérrez 3351',
          contact: ['+591 715 78106']
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona Bautista Saavedra F, Av Panamericana 4465',
          contact: ['+591 715 78106']
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address: 'Zona 16 de febrero, Av Santa Fe casi esq Av 1ro de Mayo',
          contact: ['+591 715 78106']
        },
        {
          city: 'El Alto',
          client: 'Somafam',
          nameFantasy: 'Somafam',
          address:
            'Zona 16 de julio, Calle Gutiérrez, entre Álvarez Plata y Catacora 3315',
          contact: ['+591 715 78106']
        },
        {
          city: 'El Alto',
          client: 'Wilson Suxo Quispe',
          nameFantasy: 'Tecmadeplac',
          address:
            'Av Juan Pablo II N 100 entre Juan Manuel Carpio y calle Adolfo Borda Zona Los Andes',
          contact: ['+591 715 41388']
        }
      ]
    },
    {
      name: 'China',
      imgUrl: '/img/onde-comprar/china.svg',
      id: 1,
      rows: [
        {
          city: 'DongGuan',
          client: 'Dongguan M&M Wood Co., Ltd',
          nameFantasy: 'M&M Wood',
          address:
            'Room 107, Building 23, No. 252 Guanchang Road, Dongguan, Guangdong Province',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'DongGuan',
          client: 'Dongguan Zhengbang Wood Industry Co., Ltd',
          nameFantasy: 'Tuxing Wood',
          address: 'No. 16, Building C, Jilong Timber Market, Dalingshan Town',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'Taicang  ',
          client: 'Suzhou ChaoChuang Trading Co., Ltd',
          nameFantasy: 'Suzhou ChaoChuang',
          address: 'Building #2, No.99 Yushan Road, Suzhou High Tech Zone',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'Qingdao',
          client: 'Qingdao Yihuailin International Trading Co., Ltd',
          nameFantasy: 'Qingdao Yihuailin',
          address: 'No. 1969, Binhai Avenue, Huangdao District, Qingdao',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'Qingdao',
          client: 'Qingdao Baiyi Wood Co., Ltd',
          nameFantasy: 'Baiyi Wood',
          address:
            'Room 2405, Huizhi Plaza, Jiangshan Road, Qingdao Tech Development Zone',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'Xiamen',
          client: 'Hurren (Xiamen) Import And Export Co., Ltd',
          nameFantasy: 'Hurren Xiamen',
          address: '3/F, No.46 Dongfang Shanzhuan, West Liang Qian Rd., Xiamen',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'Shanghai',
          client: 'Shanghai Jindi Industrial Co., Ltd',
          nameFantasy: 'JinDi Corporation',
          address: '-',
          contact: ['tonny_yu@hotmail.com', 'WeChat: wxid_1to9kjgpqoxh21']
        },
        {
          city: 'LiShui',
          client: 'Zhejiang Huajia Wood Industry Co., Ltd',
          nameFantasy: 'Zhejiang Huajia Wood',
          address:
            'No.15, Yunchuang Road, Bailongshan Street, Yunhe County, Lishui, Zhejiang, China',
          contact: ['huamin1234@qq.com', 'WeChat: wxid_ak92u7u947aa22']
        },
        {
          city: 'Xiamen',
          client: 'Xiamen Xiangyu Superchain Supply Chain Development Co., Ltd',
          nameFantasy: 'Xiangyu Superchain',
          address:
            'Unit 1-01, 6th Floor, Xmxyg Corp. Building, No.85 Xiangyu Road, Xiamen Area Of China, Fujian',
          contact: ['sun.h@xiangyu.cn', '+86 150 6398 2436']
        }
      ]
    },
    {
      name: 'Colômbia',
      imgUrl: '/img/onde-comprar/colombia.svg',
      id: 2,
      rows: [
        {
          city: 'Soledad',
          client: 'CIMCA/Madeflex',
          nameFantasy: 'CIMCA/Madeflex',
          address: 'Cll 15 # 26A - 50, Soledad, Atlantico',
          contact: ['+57 5375 9450']
        }
      ]
    },
    {
      name: 'E. Árabes Unidos',
      imgUrl: '/img/onde-comprar/emirados.svg',
      id: 3,
      rows: [
        {
          city: 'Dubai',
          client: 'Global Lumber Resources Inc. ',
          nameFantasy: 'Global Lumber Resources',
          address:
            'P.O.Box: 643536, Plot No: S-20802, Jebel Ali Free Zone South, Dubai, U.A.E.',
          contact: ['zag@globallumber.org', '+1 647 205-4125']
        }
      ]
    },
    {
      name: 'EUA',
      imgUrl: '/img/onde-comprar/eua.svg',
      id: 4,
      rows: [
        {
          city: 'Hialeah/Florida',
          client: 'Market Wood',
          nameFantasy: 'Market Wood',
          address: '2396 W 77th Street Hialeah Florida 33016',
          contact: ['+1 (305) 4562557', 'www.market-wood.com']
        }
      ]
    },
    {
      name: 'Índia',
      imgUrl: '/img/onde-comprar/india.svg',
      id: 5,
      rows: [
        {
          city: 'Mumbai',
          client: 'Woodstock - Altaf Ahmed Usman Ali',
          nameFantasy: 'Wood Stock',
          address: '212 Bazar Ward, Old Agra Road, Kurla, Mumbai, India',
          contact: ['altaf7862@gmail.com', '+91 98677 62598']
        }
      ]
    },
    {
      name: 'Paraguai',
      imgUrl: '/img/onde-comprar/paraguay.svg',
      id: 6,
      rows: [
        {
          city: 'Lambaré',
          client: 'Maveq',
          nameFantasy: 'Maveq',
          address: 'Tte. Mauricio José Troche Esq. Edulfo Duarte',
          contact: ['+595 021 925 300', 'http://maveq.com.py']
        },
        {
          city: 'San Lorenzo',
          client: 'Maveq',
          nameFantasy: 'Maveq',
          address: 'Ruta II Mariscal José Felix Estigarribia y Calle Aratiri',
          contact: ['+595 021 238 3180', 'http://maveq.com.py']
        },
        {
          city: 'Fernando de la Mora',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Arq. Tomas Pereira e/ Cnel. Franco No. 107',
          contact: ['+595 520-785', 'www.saba.com.py']
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Avda. Cacique Lambaré c/ Moises Bertoni',
          contact: ['+595 904-447', 'www.saba.com.py']
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Juan B. Rivarola c/ Avda. Cacique Lambaré',
          contact: ['+595 338-948', 'www.saba.com.py']
        },
        {
          city: 'Lambaré',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Km. 13,5 Ruta Transchaco c/ Luis Herrera',
          contact: ['+595 755-921', 'www.saba.com.py']
        },
        {
          city: 'San Lorenzo',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'General Eugenio A. Garay c/ Dr. Gabriel Pellon',
          contact: ['+595 552-427', 'www.saba.com.py']
        }
      ]
    },
    {
      name: 'Panamá',
      imgUrl: '/img/onde-comprar/panama.svg',
      id: 7,
      rows: [
        {
          city: 'Cidade do Panamá',
          client: 'Moby Panamá',
          nameFantasy: 'Moby Panamá',
          address: 'Urb. Parque Lefevre, Via España Edificio. La Garantía.',
          contact: ['+595 021 238 3180', 'https://moby-group.com']
        },
        {
          city: 'Cidade do Panamá',
          client: 'Empresas Melo',
          nameFantasy: 'Melo Multilaminas',
          address: 'Vía Transístmica a lado del antiguo Triángulo',
          contact: ['+507 229-3551', 'www.multilaminaspanama.com']
        },
        {
          city: 'Cidade do Panamá',
          client: 'Empresas Melo',
          nameFantasy: 'Melo Multilaminas',
          address: 'Ave. Domingo Díaz, Llano bonito, Juan Díaz',
          contact: ['+570 233-4403', 'www.multilaminaspanama.com']
        }
      ]
    },
    {
      name: 'Tailândia',
      imgUrl: '/img/onde-comprar/tailandia.svg',
      id: 8,
      rows: [
        {
          city: 'Si Racha',
          client: 'Pan Asia Packing Ltd.',
          nameFantasy: 'Sumitomo Forestry / Pan Asia',
          address:
            '789/5-7 Pinthong Industrial Estate Moo. 1, T. Nongkham, A. Sriracha, Chonburi 20230, Thailand',
          contact: ['uchida@panasiapacking.co.th', '+66 65 955 9585']
        }
      ]
    },
    {
      name: 'Uruguai',
      imgUrl: '/img/onde-comprar/uruguay.svg',
      id: 9,
      rows: [
        {
          city: 'Montevideo',
          client: 'Dubarry',
          nameFantasy: 'Dubarry',
          address: 'Camino Corrales 3076',
          contact: ['+598  2200 9293', 'www.dubarry.com.uy']
        },
        {
          city: 'Montevideo',
          client: 'Barraca Paraná',
          nameFantasy: 'Barraca Paraná',
          address: 'Cno. Benito Berges 4300',
          contact: ['+595 021 238 3180', 'www.barracaparana.com']
        },
        {
          city: 'Montevideo',
          client: 'Barraca Paraná',
          nameFantasy: 'Barraca Paraná',
          address: 'Democracia 2350',
          contact: ['+598 2200 0845', 'www.barracaparana.com']
        },
        {
          city: 'Montevideo',
          client: 'Terciadas Placas Saba',
          nameFantasy: 'Saba',
          address: 'Democracia 2319',
          contact: ['+598 2200 0845', 'www.barracaparana.com']
        }
      ]
    },
    {
      name: 'Vietnã',
      imgUrl: '/img/onde-comprar/vietna.svg',
      id: 10,
      rows: [
        {
          city: 'Tân Uyên',
          client: 'Senfeng Hongkong Trading Company Limited',
          nameFantasy: 'Senfeng Hongkong / Canh Hong Wood',
          address:
            ' Room 803,Chevalier House,45-51, Chatham Road South, Tsim Sha Tsui, Kowloon, Hong Kong',
          contact: ['jackzengww@vip.qq.com', '+852 0650-3612958']
        },
        {
          city: 'Ho Chi Minh City',
          client: 'Huynh Le Wood Company Limited',
          nameFantasy: 'Huynh Le Wood',
          address:
            '126/6 Nguyen Du Street, Ward. 7, Go Vap, District, HCMC, Vietnam, 70550',
          contact: ['https://www.huynhlefurniture.com/', 'info@huynhle.com.vn']
        },
        {
          city: 'Ho Chi Minh City',
          client: 'Tan Phu Joint Stock Company',
          nameFantasy: 'Tan Phu',
          address:
            '130 Nguyen Cuu Dam Street, Tan Son Nhi Ward, Tan Phu District, HCMC, Vietnam',
          contact: ['tanphu@tanphujsc.vn', '+84 835014911']
        }
      ]
    }
  ]
}
