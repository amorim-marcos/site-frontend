/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react'

import { Container, Grid, GridItem } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import useMobile from 'hooks/useMobile'

import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTabs'
import { BP } from './BP'

export type Filters = {
  orderBy: string
  nameSearched: string
  panels: Array<string>
  collections: Array<string>
  colorations: Array<string>
}

export type ValidFilterNames = 'panels' | 'collections' | 'colorations'

export type FilterPanelName = 'none' | ValidFilterNames

export type GridSize = 'big' | 'medium' | 'small'

export const initialFilters: Filters = {
  orderBy: 'launch',
  nameSearched: '',
  panels: [],
  collections: [],
  colorations: []
}

export type BPCatalogProps = {
  bps: {
    id: any
    name: string
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
  const [displayFilters, setDisplayFilters] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [gridSize, setGridSize] = useState('big')
  const [gridColumnsMode, setGridColumnsMode] = useState('repeat(3, 1fr)')
  const [currentFilterPanel, setCurrentFilterPanel] = useState('none')
  const [filters, setFilters] = useState(initialFilters)
  const [filteredBps, setFilteredBps] = useState(bps)
  const [filtersEmpty, setFiltersEmpty] = useState(true)

  const { isMobile } = useMobile(1024)

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
          .startsWith(filters['nameSearched'].toLowerCase())
      })
    }

    // panels
    if (filters['panels'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.panels.some((panel: any) => filters['panels'].includes(panel))
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

          return dateA > dateB ? 1 : dateA < dateB ? -1 : 0
        })
        break
      case 'name':
        filteredBps.sort((a, b) => {
          return a['name'].toLowerCase() > b['name'].toLowerCase()
            ? 1
            : a['name'].toLowerCase() < b['name'].toLowerCase()
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
    setGridSize(isMobile ? 'mobile-big' : 'big')
  }, [isMobile])

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
            title: 'Catálogo BP',
            url: '/produtos/bp-berneck/catalog'
          }
        ]}
      />
      <Container
        backgroundColor={darkMode ? 'gray.400' : 'white.100'}
        maxW="1920px"
        paddingInline="0"
        paddingTop={isMobile ? '0' : '30px'}
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
        >
          <Grid
            templateRows="repeat(auto, 1fr)"
            templateColumns={gridColumnsMode}
            gridGap={{ base: '10px', xl: '30px' }}
          >
            {filteredBps &&
              filteredBps.map((bp) => (
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
        </Container>
      </Container>
    </>
  )
}
