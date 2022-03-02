/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Container, Grid, GridItem, Center } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'

import useMobile from 'hooks/useMobile'
import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTab'
import { Env } from './Env'

export type ValidFilterNames = 'bps' | 'ambients' | 'styles'

export type FilterPanelName = 'none' | ValidFilterNames

export type Filters = {
  nameSearched: string
  bps: Array<string>
  ambients: Array<string>
  styles: Array<string>
}

export const initialFilters: Filters = {
  nameSearched: '',
  bps: [],
  ambients: [],
  styles: []
}

export type EnvGalleryProps = {
  envs: Array<any>
  availableBps: Array<any>
}

export const EnvGallery = ({ envs, availableBps }: EnvGalleryProps) => {
  const [displayFilters, setDisplayFilters] = React.useState(false)
  const [currentFilterPanel, setCurrentFilterPanel] = React.useState('none')
  const [filteredEnvs, setFilteredEnvs] = React.useState(envs)
  const [filters, setFilters] = React.useState(
    JSON.parse(JSON.stringify(initialFilters))
  )
  const [filtersEmpty, setFiltersEmpty] = React.useState(true)
  const { isMobile } = useMobile(1024)

  function changeFilterPanel(newFilterPanel: FilterPanelName) {
    setCurrentFilterPanel(
      currentFilterPanel == newFilterPanel ? 'none' : newFilterPanel
    )
  }

  function appendFilter(type: ValidFilterNames, value: string) {
    setFilters((f: any) => ({
      ...f,
      [type]: [...f[type], value]
    }))
  }

  function removeFilter(type: ValidFilterNames, value: string) {
    setFilters((f: any) => ({
      ...f,
      [type]: f[type].filter((v: string) => v != value)
    }))
  }

  function applyFilters(filters: any, originalEnvs: Array<any>) {
    let filteredEnvs = originalEnvs

    // search
    if (filters['nameSearched'] && filters['nameSearched'] !== '') {
      filteredEnvs = filteredEnvs.filter((env: any) => {
        return env.name
          .toLowerCase()
          .startsWith(filters['nameSearched'].toLowerCase())
      })
    }

    // bps
    if (filters['bps'].length > 0) {
      filteredEnvs = filteredEnvs.filter((env: any) => {
        return env?.bps?.some((bp: any) => filters['bps'].includes(bp))
      })
    }

    // ambients
    if (filters['ambients'].length > 0) {
      filteredEnvs = filteredEnvs.filter((env: any) => {
        return filters['ambients'].includes(env.ambient)
      })
    }

    // styles
    if (filters['styles'].length > 0) {
      filteredEnvs = filteredEnvs.filter((env: any) => {
        return filters['styles'].includes(env.style)
      })
    }

    return filteredEnvs.slice()
  }

  React.useEffect(() => {
    if (
      filters.ambients.length == 0 &&
      filters.bps.length == 0 &&
      filters.styles.length == 0 &&
      filters.nameSearched === ''
    ) {
      setFiltersEmpty(true)
    } else {
      setFiltersEmpty(false)
    }
  }, [filters])

  return (
    <>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: 'produtos'
          },
          {
            title: 'BP BERNECK®',
            url: '/produtos/bp-berneck'
          },
          {
            title: 'Galeria de Ambientes',
            url: '/produtos/bp-berneck/gallery'
          }
        ]}
      />
      <Container
        backgroundColor="white.100"
        maxW="1920px"
        width="100%"
        paddingInline="0"
        paddingBottom="300px"
      >
        <Container
          zIndex="30"
          position={isMobile && displayFilters ? 'absolute' : 'relative'}
          mb={
            displayFilters
              ? { base: '40px', md: '100px' }
              : { base: '5px', md: '15px' }
          }
          minW="100%"
          minH={{ base: '0', md: '50px' }}
          height={isMobile && displayFilters ? '100%' : 'auto'}
          paddingInline="0"
        >
          {isMobile ? (
            <FiltersAccordion
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              setFilters={setFilters}
              setFilteredEnvs={setFilteredEnvs}
              applyFilters={applyFilters}
              bps={availableBps}
              envs={envs}
              filters={filters}
              filtersEmpty={filtersEmpty}
            />
          ) : (
            <FiltersTabs
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              setFilters={setFilters}
              setFilteredEnvs={setFilteredEnvs}
              applyFilters={applyFilters}
              bps={availableBps}
              envs={envs}
              filters={filters}
              filtersEmpty={filtersEmpty}
            />
          )}
        </Container>
        <Container
          display={isMobile && displayFilters ? 'none' : 'normal'}
          minW="100%"
        >
          <Center>
            <Grid
              width="100%"
              overflow="hidden"
              templateRows="repeat(auto, 1fr)"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                xl: 'repeat(3, 1fr)'
              }}
              gridGap={{
                base: 'none',
                sm: '10px',
                md: '30px',
                xl: '10px',
                '2xl': '30px'
              }}
              justifyItems="center"
            >
              {filteredEnvs &&
                filteredEnvs.map((env) => (
                  <GridItem key={env.id} mt="60px">
                    <Env
                      href={`/products/bp-berneck/gallery/${env.url_code}`}
                      type={env.type}
                      name={env.name}
                      image_url={env.image_url}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Center>
        </Container>
      </Container>
    </>
  )
}

export const filtersCheckboxes = {
  ambients: [
    {
      title: 'Adega',
      code: 'adega'
    },
    {
      title: 'Área de serviço',
      code: 'area_servico'
    },
    {
      title: 'Banheiro',
      code: 'banheiro'
    },
    {
      title: 'Bar e restaurante',
      code: 'bar_resturante'
    },
    {
      title: 'Comercial',
      code: 'comercial'
    },
    {
      title: 'Corredor',
      code: 'corredor'
    },
    {
      title: 'Cozinha',
      code: 'cozinha'
    },
    {
      title: 'Garagem',
      code: 'garagem'
    },
    {
      title: 'Home',
      code: 'home'
    },
    {
      title: 'Infantil',
      code: 'infantil'
    }
  ],
  styles: [
    {
      title: 'Aconchegante',
      code: 'Aconchegante'
    },
    {
      title: 'Clássico',
      code: 'classico'
    },
    {
      title: 'Contemporâneo',
      code: 'contemporaneo'
    },
    {
      title: 'Escandinavo',
      code: 'escandinavo'
    },
    {
      title: 'Industrial',
      code: 'industrial'
    },
    {
      title: 'Lúdico',
      code: 'lúdico'
    },
    {
      title: 'Moderno',
      code: 'moderno'
    },
    {
      title: 'Natural',
      code: 'natural'
    },
    {
      title: 'Sóbrio',
      code: 'sobrio'
    },
    {
      title: 'Sofisticado',
      code: 'sofisticado'
    },
    {
      title: 'Urbano',
      code: 'urbano'
    }
  ]
}
