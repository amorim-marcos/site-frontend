/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react'

import { Box, Container, Grid, GridItem, Flex, Text} from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import useMobile from 'hooks/useMobile'

import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTabs'
import { BP } from './BP'
import { useRouter } from 'next/router'

export type Filters = {
  orderBy: string
  nameSearched: string
  panels: Array<number | string>
  collections: Array<number | string>
  colorations: Array<number | string>
}

export type ValidFilterNames = 'panels' | 'collections' | 'colorations'

export type FilterPanelName = 'none' | ValidFilterNames

export type GridSize = 'big' | 'medium' | 'small'

export const initialFilters: Filters = {
  orderBy: 'scale',
  nameSearched: '',
  panels: [],
  collections: [],
  colorations: []
}

export type BPCatalogProps = {
  bps: {
    id: any
    launch: string
    scale: number
    name: string
    complete_name: string
    product_texture: string
    pattern_image: string
    url_code: string
    coloration: number
    collections: number[]
    panelTypes: number[]
  }[]
  filtersContext: {
    panels: {
      code: number
      title: string
      background_image: string
    }[]
    collections: {
      code: number
      title: string
      background_image: string
    }[]
    colorations: {
      code: number
      title: string
      background_image: string
    }[]
  }
}

export const BPCatalog = ({ bps, filtersContext }: BPCatalogProps) => {
  const { isMobile } = useMobile(1024)
  const [displayFilters, setDisplayFilters] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [gridSize, setGridSize] = useState('big')
  const [gridColumnsMode, setGridColumnsMode] = useState('repeat(3, 1fr)')
  const [currentFilterPanel, setCurrentFilterPanel] = useState('none')
  const [filteredBps, setFilteredBps] = useState(bps)
  const [filtersEmpty, setFiltersEmpty] = useState(true)

  const router = useRouter()

  const queryCollection = router.query.collection

  const [filters, setFilters] = useState(initialFilters)

  function changeGridSize(newGridSize: GridSize) {
    setGridSize(newGridSize)
  }

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

  function applyFilters(filters: any, originalBps: Array<any>) {
    let filteredBps = originalBps

    // search
    if (filters['nameSearched'] && filters['nameSearched'] !== '') {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.name
          .toLowerCase()
          .includes(filters['nameSearched'].toLowerCase())
      })
    }

    // panels
    if (filters['panels'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.panelTypes.some((panel: any) =>
          filters['panels'].includes(panel)
        )
      })
    }

    // collections
    if (filters['collections'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.collections.some((collection: any) =>
          filters['collections'].includes(collection)
        )
      })
    }

    // colorations
    if (filters['colorations'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return filters['colorations'].includes(bp.coloration)
      })
    }

    // order
    switch (filters['orderBy']) {
      case 'launch':
        filteredBps.sort((a, b) => {
          const dateA = new Date(a['launch'])
          const dateB = new Date(b['launch'])

          return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        break
      case 'name':
        filteredBps.sort((a, b) => {
          return a['name'].normalize("NFD").toLowerCase() > b['name'].normalize("NFD").toLowerCase()
            ? 1
            : a['name'].normalize("NFD").toLowerCase() < b['name'].normalize("NFD").toLowerCase()
            ? -1
            : 0
        })
        break
      case 'scale':
        filteredBps.sort((a, b) => {
          return a['scale'] > b['scale'] ? 1 : a['scale'] < b['scale'] ? -1 : 0
        })
        break
    }

    return filteredBps.slice()
  }

  useEffect(() => {
    if(queryCollection){
      for (const collection of filtersContext.collections) {
        const normalizedTitle = collection.title
          .normalize('NFD')
          .replace(/[^\w ]/g, '')
          .split(' ')
          .join('-')
          .toLowerCase()
  
        if (
          queryCollection == normalizedTitle &&
          !initialFilters['collections'].includes(collection.code.toString())
        ) {
          filters['collections'].push(collection.code)
          break
        }
      }
      setFilters(filters)
      setFilteredBps(applyFilters(filters, bps)) 
      changeFilterPanel('collections')
    }
  }, [])

  useEffect(() => {
    switch (gridSize) {
      case 'big':
        setGridColumnsMode('repeat(3, 1fr)')
        break
      case 'medium':
        setGridColumnsMode('repeat(5, 1fr)')
        break
      case 'small':
        setGridColumnsMode('repeat(7, 1fr)')
        break
      case 'mobile-big':
        setGridColumnsMode('repeat(1, 1fr)')
        break
      case 'mobile-medium':
        setGridColumnsMode('repeat(2, 1fr)')
        break
    }
  }, [gridSize])

  useEffect(() => {
    setFiltersEmpty(
      filters.panels.length == 0 &&
        filters.collections.length == 0 &&
        filters.colorations.length == 0 &&
        filters.nameSearched === ''
    )
  }, [filters])

  useEffect(() => {
    setGridSize(isMobile ? 'mobile-medium' : 'medium')
    setDisplayFilters(isMobile ? false : true)
  }, [isMobile])

  useEffect(() => {
    if (router.query.panel) {
      const itemFilter = filtersContext.panels.find(
        (item) => item.title === router.query.panel
      )
      if (typeof itemFilter !== 'undefined') {
        appendFilter('panels', itemFilter.code as any)

        setFilteredBps(
          applyFilters(
            {
              ...filters,
              ['panels']: [itemFilter.code as any]
            },
            bps
          )
        )
        changeFilterPanel('panels')
      }
    }
  }, [router.query])

  return (
    <>
      <Pagebar
        paths={[
          {
            title: 'Produtos',
            url: '/products'
          },
          {
            title: 'BP BERNECK®',
            url: '/products/bp-berneck'
          },
          {
            title: 'Catálogo BP',
            url: '/products/bp-berneck/catalog'
          }
        ]}
      />
    <Box
      backgroundColor={darkMode ? 'gray.400' : 'white.100'}
    >
      <Container
        backgroundColor={darkMode ? 'gray.400' : 'white.100'}
        maxW="1536px"
        paddingInline="0"
        paddingTop={isMobile ? '0' : '30px'}
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
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              setFilters={setFilters}
              bps={bps}
              setFilteredBps={setFilteredBps}
              applyFilters={applyFilters}
              panels={filtersContext['panels']}
              colorations={filtersContext['colorations']}
              collections={filtersContext['collections']}
              filters={filters}
              filtersEmpty={filtersEmpty}
              filteredBpsLength={filteredBps.length}
              gridSize={gridSize}
              changeGridSize={changeGridSize}
            />
          ) : (
            <FiltersTabs
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
              setFilters={setFilters}
              bps={bps}
              setFilteredBps={setFilteredBps}
              applyFilters={applyFilters}
              panels={filtersContext['panels']}
              colorations={filtersContext['colorations']}
              collections={filtersContext['collections']}
              filters={filters}
              filtersEmpty={filtersEmpty}
              filteredBpsLength={filteredBps.length}
              gridSize={gridSize}
              changeGridSize={changeGridSize}
            />
          )}
        </Container>
        <Container
          display={isMobile && displayFilters ? 'none' : 'normal'}
          minW="100%"
          mb="100px"
        >
          {filteredBps && filteredBps.length > 0 ? (
            <Grid
              mt={
                displayFilters
                  ? { base: '40px', md: '100px' }
                  : { base: '5px', md: '15px' }
              }
              templateRows="repeat(auto, 1fr)"
              templateColumns={gridColumnsMode}
              gridGap={{ base: '10px', xl: '30px' }}
            >
              {filteredBps.map((bp) => (
                <GridItem key={bp.id}>
                  <BP
                    id={bp.id}
                    name={bp.name}
                    product_texture={bp.product_texture}
                    pattern_image={bp.pattern_image}
                    url_code={bp.url_code}
                    href={`/products/bp-berneck/catalog/${bp.url_code}`}
                    color={darkMode ? 'white.100' : 'gray.400'}
                  />
                </GridItem>
              ))}
            </Grid>
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
    </Box>
    </>
  )
}
