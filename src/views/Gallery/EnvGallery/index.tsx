/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

import {
  Container,
  Grid,
  GridItem,
  Center,
  Text,
  Flex,
  filter
} from '@chakra-ui/react'

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

export type EnvGalleryProps = {
  envs: Array<any>
  availableBps: Array<any>
  initialFilters?: Filters
  filtersContext: {
    ambients: {
      title: string
      code: string
    }[]
    styles: {
      title: string
      code: string
    }[]
  }
}

export const EnvGallery = ({
  envs,
  availableBps,
  filtersContext,
  initialFilters = {
    nameSearched: '',
    bps: [],
    ambients: [],
    styles: []
  }
}: EnvGalleryProps) => {
  const [currentFilterPanel, setCurrentFilterPanel] = useState('none')
  const [displayFilters, setDisplayFilters] = useState(true)
  const [filteredEnvs, setFilteredEnvs] = useState(envs)
  const [filters, setFilters] = useState(initialFilters)
  const [filtersEmpty, setFiltersEmpty] = useState(true)
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
        return env.title
          .toLowerCase()
          .includes(filters['nameSearched'].toLowerCase())
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
        return filters['ambients'].includes(env.type)
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

  function resetFilters() {
    const cleanedFilters = {
      nameSearched: '',
      bps: [],
      ambients: [],
      styles: []
    }

    setFilters(cleanedFilters)
    setFilteredEnvs(applyFilters(cleanedFilters, envs))
  }

  useEffect(() => {
    if (
      initialFilters.ambients.length !== 0 ||
      initialFilters.bps.length !== 0 ||
      initialFilters.styles.length !== 0 ||
      initialFilters.nameSearched !== ''
    ) {
      setFilteredEnvs(applyFilters(initialFilters, envs))

      initialFilters.ambients.length !== 0
        ? setCurrentFilterPanel('ambients')
        : initialFilters.styles.length !== 0
        ? setCurrentFilterPanel('styles')
        : initialFilters.bps.length !== 0

      setDisplayFilters(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFilters])

  useEffect(() => {
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
      >
        <Container
          zIndex="30"
          position={isMobile && displayFilters ? 'absolute' : 'relative'}
          minW="100%"
          minH={{ base: '0', md: '50px' }}
          height={isMobile && displayFilters ? '100%' : 'auto'}
          paddingInline="0"
        >
          {isMobile ? (
            <FiltersAccordion
              filtersContext={filtersContext}
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              resetFilters={resetFilters}
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
              filtersContext={filtersContext}
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              resetFilters={resetFilters}
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
          {filteredEnvs && filteredEnvs.length > 0 ? (
            <Center
              paddingBottom="300px"
              mt={
                displayFilters
                  ? { base: '40px', md: '100px' }
                  : { base: '5px', md: '15px' }
              }
            >
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
                  xl: '30px',
                  '2xl': '40px'
                }}
                justifyItems="center"
                // bg="pink"
              >
                {filteredEnvs.map((env) => (
                  <GridItem key={env.id} mt="20px">
                    <Env
                      href={`/products/bp-berneck/gallery/${env.url_code}`}
                      title={env.title}
                      place={env.name}
                      image_url={env.image_url}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Center>
          ) : (
            <Flex
              minH="600px"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              {filters['nameSearched'] == '' ? (
                <Text
                  alignSelf="center"
                  color="gray.300"
                  fontSize={{ base: '18px', md: '24px' }}
                  textAlign="center"
                >
                  Os filtros aplicados não retornaram nenhum resultado.
                </Text>
              ) : (
                <Text
                  alignSelf="center"
                  color="gray.300"
                  fontSize={{ base: '18px', md: '24px' }}
                  textAlign="center"
                >
                  Nenhum resultado encontrado para{' '}
                  <i>"{filters['nameSearched']}"</i>
                </Text>
              )}
            </Flex>
          )}
        </Container>
      </Container>
    </>
  )
}
