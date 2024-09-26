/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useRef, useState } from 'react'
import * as Scroll from 'react-scroll'

import { Box, Container, Grid, GridItem, Flex, Text } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import useMobile from 'hooks/useMobile'

import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTabs'
import { BP } from './BP'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { normalizeTitle } from 'utils/utils'
import useRouterCustom from 'hooks/useRouterCustom'
import PageHead from '@components/PageHead'
import { LocaleOptions } from 'types/utils'
import HotjarComponent from 'services/Hotjar'

export type filtersBP = {
  orderBy: string
  nameSearched: string
  panels: Array<number | string>
  collections: Array<number | string>
  colorations: Array<number | string>
}

export type ValidFilterNames =
  | 'panels'
  | 'collections'
  | 'colorations'
  | 'nameSearched'

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
    nameSearched: string
  }
}

export const translatedQueryParamsMapping = {
  en: {
    collections: 'collections',
    panels: 'panels',
    colorations: 'colorations',
    nameSearched: 'nameSearched'
  },
  'pt-BR': {
    collections: 'colecoes',
    panels: 'paineis',
    colorations: 'coloracoes',
    nameSearched: 'nomePesquisado'
  },
  es: {
    collections: 'collections',
    panels: 'panels',
    colorations: 'colorations',
    nameSearched: 'nameSearched'
  },
  'zh-CN': {
    collections: 'collections',
    panels: 'panels',
    colorations: 'colorations',
    nameSearched: 'nameSearched'
  }
}
export function getTranslatedFilterNames(locale: keyof typeof LocaleOptions) {
  return (
    translatedQueryParamsMapping[locale] || translatedQueryParamsMapping['en']
  )
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
  const { resetQueriesFromUrl, getTranslatedPath } = useRouterCustom()
  let { locale } = router

  locale = locale || 'pt-BR'

  const pathname = router.pathname

  const translatedPathName = getTranslatedPath(pathname)

  const translatedFilterNames = getTranslatedFilterNames(
    locale as keyof typeof LocaleOptions
  )

  const [filtersBP, setFilters] = useState(() => {
    // const filtersCookie = Cookies.get('filtersBP')

    const initialProcessedFilters = { ...initialFilters }

    return initialProcessedFilters
  })
  const [filterCount, setFilterCount] = useState('')

  const renderCountRef = useRef(0)

  /** check if the component is rendered more than the expected render count
   *
   *  */
  const checkIsInitialRender = (renderCountToCheck: number) => {
    if (renderCountRef.current < renderCountToCheck) {
      return true
    }
    return false
  }

  useEffect(() => {
    renderCountRef.current += 1
  }, [router])

  const normalizeTitle = (title: string): string => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    // return title
    //   .normalize('NFD')
    //   .replace(/[^\w ]/g, '')
    //   .split(' ')
    //   .join('-')
    //   .toLowerCase()
  }

  // fill with url initial filters
  useEffect(() => {
    const isInitialRender = checkIsInitialRender(3)
    if (isInitialRender) {
      if (Object.keys(router.query).length > 0) {
        let initialProcessedFilters = { ...initialFilters }
        if (router.query[translatedFilterNames['collections']]) {
          const matchedCollection = filtersContext.collections.find(
            (collection) =>
              router.query[translatedFilterNames['collections']] ===
              normalizeTitle(collection.title)
          )
          // if (matchedCollection) {
          //   changeFilterPanel('collections')
          // }

          initialProcessedFilters = {
            ...initialProcessedFilters,
            collections: matchedCollection ? [matchedCollection.code] : []
          }

          // return {
          //   ...initialFilters,
          //   collections: matchedCollection ? [matchedCollection.code] : []
          // }
        }
        if (router.query[translatedFilterNames['panels']]) {
          const matchedPanel = filtersContext.panels.find(
            (panel) =>
              router.query[translatedFilterNames['panels']] ===
              panel.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
          )

          initialProcessedFilters = {
            ...initialProcessedFilters,
            panels: matchedPanel ? [matchedPanel.code] : []
          }
          // if (matchedPanel) {
          //   changeFilterPanel('panels')
          // }
          // return {
          //   ...initialFilters,
          //   panels: matchedPanel ? [matchedPanel.code] : []
          // }
        }

        if (router.query[translatedFilterNames['colorations']]) {
          const matchedColoration = filtersContext.colorations.find(
            (color) =>
              router.query[translatedFilterNames['colorations']] ===
              normalizeTitle(color.title)
          )

          initialProcessedFilters = {
            ...initialProcessedFilters,
            colorations: matchedColoration ? [matchedColoration.code] : []
          }
          // if (matchedColoration) {
          //   changeFilterPanel('colorations')
          // }
          // return {
          //   ...initialFilters,
          //   panels: matchedPanel ? [matchedPanel.code] : []
          // }
        }

        if (router.query[translatedFilterNames['nameSearched']]) {
          const translatedQueryName =
            router.query[translatedFilterNames['nameSearched']] ||
            'nameSearched'

          const queryName = Array.isArray(translatedQueryName)
            ? translatedQueryName[0]
            : translatedQueryName

          initialProcessedFilters = {
            ...initialProcessedFilters,
            nameSearched: queryName
          }
        }

        setFilters(initialProcessedFilters)

        setFilteredBps(applyFilters({ ...initialProcessedFilters }, bps))
      }
    }
    // todo
    // fix unspected render when the filters are changed and it is not the first render
  }, [router.query])

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

  function getCollectionName(collectionCode: string, collections: any) {
    const collection = collections.find(
      (col: any) => collectionCode === col.code
    )
    const collectionName = collection?.title

    // todo
    // handle special chars
    const normalizedTitle = normalizeTitle(collectionName) || collectionName

    return normalizedTitle
  }

  // todo
  function removeSpecialChars(value: string) {
    const formatted = value
  }

  function getPanelName(panelCode: string, panels: any) {
    const panel = panels.find((pan: any) => panelCode === pan.code)
    const panelName = panel?.title

    // todo
    // handle special chars
    const normalizedTitle = String(panelName)?.toLocaleLowerCase()

    return normalizedTitle
  }

  function getColorationName(colorationCode: string, colorations: any) {
    const coloration = colorations.find(
      (col: any) => colorationCode === col.code
    )
    const colorationName = coloration?.title

    // const normalizedTitle = String(colorationName).toLocaleLowerCase()
    const normalizedTitle = normalizeTitle(colorationName)

    return normalizedTitle
  }

  // todo
  // perform query with multiple values
  function handleAddQueryToUrl(queryName: ValidFilterNames, value: string) {
    let friendlyValue = value

    if (queryName === 'collections') {
      friendlyValue = getCollectionName(value, filtersContext['collections'])
    } else if (queryName === 'panels') {
      friendlyValue = getPanelName(value, filtersContext['panels'])
    } else if (queryName === 'colorations') {
      friendlyValue = getColorationName(value, filtersContext['colorations'])
    }

    router.replace(
      {
        pathname: translatedPathName,
        query: {
          ...router.query,
          [translatedFilterNames[queryName]]: friendlyValue
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  function handleRemoveQueryFromUrl(queryName: ValidFilterNames) {
    const queryFilterName = translatedFilterNames[queryName]
    const { query: queryObj } = router

    const newQuery = { ...queryObj }
    delete newQuery[queryFilterName]

    router.replace(
      {
        pathname: translatedPathName,
        query: {
          ...newQuery
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  function removeFilter(type: ValidFilterNames, value: string) {
    // handleRemoveQueryFromUrl(type, value)
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

    // console.log(filtersBP)

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

  // check if filters are empty
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

  // build filter count text
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

  // useEffect(() => {
  //   if (isInitialRender) {
  //     const normalizeTitle = (title: string): string => {
  //       return title
  //         .normalize('NFD')
  //         .replace(/[^\w ]/g, '')
  //         .split(' ')
  //         .join('-')
  //         .toLowerCase()
  //     }

  //     if (router.query[translatedFilterNames['panels']]) {
  //       const translatedQueryName =
  //         router.query[translatedFilterNames['panels']] || 'panels'

  //       const queryPanel = Array.isArray(translatedQueryName)
  //         ? translatedQueryName[0]
  //         : translatedQueryName
  //       const normalizedPanelQuery = normalizeTitle(queryPanel)

  //       for (const panel of filtersContext.panels) {
  //         const normalizedTitle = normalizeTitle(panel.title)

  //         if (
  //           normalizedPanelQuery === normalizedTitle &&
  //           !initialFilters['panels'].includes(panel.code)
  //         ) {
  //           appendFilter('panels', panel.code as any)
  //         }

  //         if (
  //           normalizedPanelQuery === normalizedTitle &&
  //           initialFilters['panels'].includes(panel.code)
  //         ) {
  //           removeFilter('panels', panel.code as any)
  //         }
  //       }

  //       const itemFilter = filtersContext.panels.find(
  //         (item) => normalizeTitle(item.title) === normalizedPanelQuery
  //       )
  //       if (itemFilter) {
  //         appendFilter('panels', itemFilter.code as any)

  //         setFilteredBps(
  //           applyFilters(
  //             {
  //               ...filtersBP,
  //               ['panels']: [itemFilter.code as any]
  //             },
  //             bps
  //           )
  //         )
  //         changeFilterPanel('panels')
  //       }
  //     }

  //     if (router.query[translatedFilterNames['collections']]) {
  //       const translatedQueryName =
  //         router.query[translatedFilterNames['collections']] || 'collections'

  //       const queryCollection = Array.isArray(translatedQueryName)
  //         ? translatedQueryName[0]
  //         : translatedQueryName
  //       const normalizedCollectionQuery = normalizeTitle(queryCollection)

  //       for (const collection of filtersContext.collections) {
  //         const normalizedTitle = normalizeTitle(collection.title)

  //         if (
  //           normalizedCollectionQuery === normalizedTitle &&
  //           !initialFilters['collections'].includes(collection.code)
  //         ) {
  //           appendFilter('collections', collection.code as any)
  //           setFilteredBps(
  //             applyFilters(
  //               {
  //                 ...filtersBP,
  //                 ['collections']: [collection.code as any]
  //               },
  //               bps
  //             )
  //           )
  //           changeFilterPanel('collections')
  //           break
  //         }
  //       }
  //     }
  //   }
  // }, [router.query, isInitialRender])

  useEffect(() => {
    setFilters({ ...filtersBP, orderBy: 'scale' })
    setFilteredBps(applyFilters({ ...filtersBP, orderBy: 'scale' }, bps))
  }, [])

  // useEffect(() => {
  //   console.log(`executei: `, filtersBP)

  //   setFilteredBps(applyFilters({ ...filtersBP, orderBy: 'scale' }, bps))
  // }, [filtersBP])

  const bpCatalog = useTranslation('bpCatalog')
  const galleryViewLabels = useTranslation('galleryView')

  const handleResetFilters = () => {
    const cleanedFilters = { ...initialFilters }

    resetQueriesFromUrl()
    setFilters({ ...cleanedFilters })
    const filteredBps = applyFilters({ ...initialFilters }, bps)
    setFilteredBps(filteredBps)
  }

  const handleBackAction = () => {
    handleResetFilters()
  }

  const catalogPath = '/products/bp-berneck/catalog'
  const translatedCatalogPath = getTranslatedPath(catalogPath)
  return (
    <>
      <PageHead
        page_title={bpCatalog.t('pageMetadata.pageTitle')}
        page_description={bpCatalog.t('pageMetadata.pageDescription')}
      />
      <HotjarComponent />
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
            url: '/products/bp-berneck/catalog',
            onItemClick: handleBackAction
          }
        ]}
        goToUrl={translatedPathName}
        onBackAction={handleBackAction}
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
                onAddQueryParam={handleAddQueryToUrl}
                onRemoveQueryParam={handleRemoveQueryFromUrl}
                onResetFilters={handleResetFilters}
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
                onAddQueryParam={handleAddQueryToUrl}
                onRemoveQueryParam={handleRemoveQueryFromUrl}
                onResetFilters={handleResetFilters}
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
              <Text
                color={darkMode ? 'green.300' : 'gray.300'}
                fontWeight={'bold'}
              >
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
                          ? `${translatedCatalogPath}/${bp.url_code}`
                          : `/${router.locale}${translatedCatalogPath}/${bp.url_code}`
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
