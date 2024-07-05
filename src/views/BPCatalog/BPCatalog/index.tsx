/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react'
import * as Scroll from 'react-scroll'

import { Box, Container, Grid, GridItem, Flex, Text } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import useMobile from 'hooks/useMobile'

import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTabs'
import { BP } from './BP'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'

export type filtersBP = {
  orderBy: string
  nameSearched: string
  panels: Array<number | string>
  collections: Array<number | string>
  colorations: Array<number | string>
}

export type ValidFilterNames = 'panels' | 'collections' | 'colorations'

export type FilterPanelName = 'none' | ValidFilterNames

export type GridSize = 'big' | 'medium' | 'small'

export const initialFilters: filtersBP = {
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

  const [filtersBP, setFilters] = useState(() => {
    // const filtersCookie = Cookies.get('filtersBP')

    if (router.query.collection) {
      const matchedCollection = filtersContext.collections.find(
        (c: any) =>
          router.query.collection ===
          c.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
      )

      return {
        ...initialFilters,
        collections: matchedCollection ? [matchedCollection.code] : []
      }
    } else if (router.query.panel) {
      const matchedPanel = filtersContext.panels.find(
        (p: any) =>
          router.query.panel ===
          p.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
      )

      return {
        ...initialFilters,
        panels: matchedPanel ? [matchedPanel.code] : []
      }
    } 
    // else if (filtersCookie) {
    //   return JSON.parse(decodeURIComponent(filtersCookie))
    // }

    return initialFilters
  })

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

  function applyFilters(filtersBP: any, originalBps: Array<any>) {
    let filteredBps = originalBps

    // search
    if (filtersBP['nameSearched'] && filtersBP['nameSearched'] !== '') {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.name
          .toLowerCase()
          .includes(filtersBP['nameSearched'].toLowerCase())
      })
    }

    // panels
    if (filtersBP['panels'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.panelTypes.some((panel: any) =>
          filtersBP['panels'].includes(panel)
        )
      })
    }

    // collections
    if (filtersBP['collections'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return bp.collections.some((collection: any) =>
          filtersBP['collections'].includes(collection)
        )
      })
    }

    // colorations
    if (filtersBP['colorations'].length > 0) {
      filteredBps = filteredBps.filter((bp: any) => {
        return filtersBP['colorations'].includes(bp.coloration)
      })
    }

    // order
    switch (filtersBP['orderBy']) {
      case 'launch':
        filteredBps.sort((a, b) => {
          const dateA = new Date(a['launch'])
          const dateB = new Date(b['launch'])

          return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        break
      case 'name':
        filteredBps.sort((a, b) => {
          return a['name'].normalize('NFD').toLowerCase() >
            b['name'].normalize('NFD').toLowerCase()
            ? 1
            : a['name'].normalize('NFD').toLowerCase() <
              b['name'].normalize('NFD').toLowerCase()
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
    // Scroll.animateScroll.scrollToTop()

    console.log(filtersBP)

    return filteredBps.slice()
  }

  // const resetCookies = () => {
  //   if (Cookies.get('cookieAccepted')) {
  //     Cookies.remove('filtersBP');
  //   }
  // };
  

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
      filtersBP.panels.length == 0 &&
        filtersBP.collections.length == 0 &&
        filtersBP.colorations.length == 0 &&
        filtersBP.nameSearched === ''
    )
  }, [filtersBP])

  

  useEffect(() => {
    setGridSize(isMobile ? 'mobile-medium' : 'medium')
    
  }, [isMobile])

  // if (Cookies.get('cookieAccepted')) {
  //   useEffect(() => {
  //     Cookies.set('filtersBP', JSON.stringify(filtersBP), { expires: 7 })
  //   }, [])
  // }



  const [filterCount, setFilterCount] = useState('')
  useEffect(() => {
    let numFilters =
      filtersBP.collections.length +
      filtersBP.colorations.length +
      filtersBP.panels.length

    if (filtersBP.nameSearched !== '') {
      numFilters += 1
    }

    const filtersCounterText =
      numFilters === 1
        ? bpCatalog.t('filtersTab.filtersCounter1')
        : bpCatalog.t('filtersTab.filtersCounter')
    if (numFilters === 0) {
      setFilterCount(
        `${filteredBps.length} ${bpCatalog.t(
          'filtersTab.productsFound'
        )} | ${bpCatalog.t('filtersTab.noFiltersApplied')}`
      )
    } else {
      const filterCountText = `${numFilters} ${filtersCounterText}`
      setFilterCount(
        `${filteredBps.length} ${bpCatalog.t(
          'filtersTab.productsFound'
        )} | ${filterCountText}`
      )
    }
  }, [filteredBps])

  useEffect(() => {
    const normalizeTitle = (title: string): string => {
      return title
            .normalize('NFD')
            .replace(/[^\w ]/g, '')
            .split(' ')
            .join('-')
            .toLowerCase();
    };

    if (router.query.panel) {
        const queryPanel = Array.isArray(router.query.panel)
            ? router.query.panel[0]
            : router.query.panel;
        const normalizedPanelQuery = normalizeTitle(queryPanel);

        for (const panel of filtersContext.panels) {
            const normalizedTitle = normalizeTitle(panel.title);

            if (
                normalizedPanelQuery === normalizedTitle &&
                !initialFilters['panels'].includes(panel.code)
            ) {
                appendFilter('panels', panel.code as any);
            }

            if (
                normalizedPanelQuery === normalizedTitle &&
                initialFilters['panels'].includes(panel.code)
            ) {
                removeFilter('panels', panel.code as any);
            }
        }

        const itemFilter = filtersContext.panels.find(
            (item) => normalizeTitle(item.title) === normalizedPanelQuery
        );
        if (itemFilter) {
            appendFilter('panels', itemFilter.code as any);

            setFilteredBps(
                applyFilters(
                    {
                        ...filtersBP,
                        ['panels']: [itemFilter.code as any],
                    },
                    bps
                )
            );
            changeFilterPanel('panels');
        }
    }

    if (router.query.collection) {
        const queryCollection = Array.isArray(router.query.collection)
            ? router.query.collection[0]
            : router.query.collection;
        const normalizedCollectionQuery = normalizeTitle(queryCollection);

        for (const collection of filtersContext.collections) {
            const normalizedTitle = normalizeTitle(collection.title);

            if (
                normalizedCollectionQuery === normalizedTitle &&
                !initialFilters['collections'].includes(collection.code)
            ) {
                appendFilter('collections', collection.code as any);
                setFilteredBps(
                    applyFilters(
                        {
                            ...filtersBP,
                            ['collections']: [collection.code as any],
                        },
                        bps
                    )
                );
                changeFilterPanel('collections');
                break;
            }
        }
    }
}, [router.query]);


  useEffect(() => {
    setFilters({ ...filtersBP, orderBy: 'scale' })
    setFilteredBps(applyFilters({ ...filtersBP, orderBy: 'scale' }, bps))
  }, [])

  const bpCatalog = useTranslation('bpCatalog')
  const galleryViewLabels = useTranslation('galleryView')

  return (
    <>
      <Pagebar
        paths={[
          {
            title: bpCatalog.t('pagebar.products'),
            url: '/products'
          },
          {
            title: bpCatalog.t('pagebar.bpBerneck'),
            url: '/products/bp-berneck'
          },
          {
            title: bpCatalog.t('pagebar.bpCatalog'),
            url: '/products/bp-berneck/catalog'
          }
        ]}
      />
      <Box backgroundColor={darkMode ? 'gray.400' : 'white.100'}>
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
                filtersBP={filtersBP}
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
                filtersBP={filtersBP}
                filtersEmpty={filtersEmpty}
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
            <Flex
              w="100%"
              pt="50px"
              justifyContent={'flex-end'}
              alignItems="center"
            >
              <Text color={darkMode ? 'green.300' : 'gray.300'} fontWeight={'bold'}>
                {filterCount}
              </Text>
            </Flex>
            {filteredBps && filteredBps.length > 0 ? (
              <Grid
                mt={
                  displayFilters
                    ? { base: '40px', md: '30px' }
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
                      href={
                        router.locale == 'pt-BR'
                          ? `/products/bp-berneck/catalog/${bp.url_code}`
                          : `/${router.locale}/products/bp-berneck/catalog/${bp.url_code}`
                      }
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
                {filtersBP['nameSearched'] == '' ? (
                  <Text
                    alignSelf="center"
                    color="gray.300"
                    fontSize={{ base: '18px', md: '24px' }}
                    textAlign="center"
                  >
                    {bpCatalog.t('filters.notFound')}
                  </Text>
                ) : (
                  <Text
                    alignSelf="center"
                    color="gray.300"
                    fontSize={{ base: '18px', md: '24px' }}
                    textAlign="center"
                  >
                    {bpCatalog.t('filters.notFoundFor')}{' '}
                    <i>{`"${filtersBP['nameSearched']}"`}</i>
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
