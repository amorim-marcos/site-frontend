/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import * as Scroll from 'react-scroll'
import {
  Container,
  Grid,
  GridItem,
  Center,
  Text,
  Flex,
  Box
} from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'

import useMobile from 'hooks/useMobile'
import { FiltersAccordion } from './FiltersAccordion'
import { FiltersTabs } from './FiltersTab'
import { Env } from './Env'
import { useRouter } from 'next/router'
import { env } from 'process'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import useRouterCustom from 'hooks/useRouterCustom'

export type ValidFilterNames =
  | 'bps'
  | 'ambients'
  | 'styles'
  | 'page'
  | 'nameSearched'

export type FilterPanelName = 'none' | ValidFilterNames

export type Filters = {
  nameSearched: string
  bps: Array<number>
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
    bps: {
      title: string
      code: string
    }[]
  }
}
const pageSize = 9

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
  const [displayFilters, setDisplayFilters] = useState(false)
  const [filteredEnvs, setFilteredEnvs] = useState(envs)
  const [filtersEmpty, setFiltersEmpty] = useState(true)
  const { isMobile } = useMobile(1024)

  const [isInitialRender, setIsInitialRender] = useState(true)
  const router = useRouter()

  const { addQueryToUrl, removeQueryFromUrl, resetQueriesFromUrl } =
    useRouterCustom()

  const pathname = router.pathname

  const initialURLFilters = getFiltersFromURL()
  const initialPage = initialURLFilters?.page
    ? Number(initialURLFilters.page)
    : 1

  const initialCookieFilters = getFiltersFromCookies() || initialFilters

  const [pagination, setPagination] = useState(initialPage)
  const [filters, setFilters] = useState(() => {
    return {
      ...initialCookieFilters,
      ...initialURLFilters
    }
  })

  // function handleAddQueryToUrl(queryName: ValidFilterNames, value: string) {
  //   router.replace(
  //     {
  //       pathname: pathname,
  //       query: {
  //         ...router.query,
  //         [queryName]: value
  //       }
  //     },
  //     undefined,
  //     { shallow: true }
  //   )
  // }

  // function handleResetQueriesFromUrl() {
  //   router.replace(
  //     {
  //       pathname: pathname
  //     },
  //     undefined,
  //     {
  //       shallow: true
  //     }
  //   )
  // }

  // function handleRemoveQueryFromUrl(
  //   queryName: ValidFilterNames,
  //   value: string
  // ) {
  //   const { query: queryObj } = router

  //   const newQuery = { ...queryObj }
  //   delete newQuery[queryName]

  //   router.replace(
  //     {
  //       pathname: pathname,
  //       query: {
  //         ...newQuery
  //       }
  //     },
  //     undefined,
  //     {
  //       shallow: true
  //     }
  //   )
  // }

  function getFiltersFromCookies() {
    const filtersCookie = Cookies.get('filters')
    return filtersCookie ? JSON.parse(decodeURIComponent(filtersCookie)) : null
  }

  function sanitizeValue(value: string) {
    const sanitized = value.replace(/-/g, ' ')

    return sanitized
  }

  function getFiltersFromURL() {
    const { query } = router
    const filtersFromURL: any = {}

    const ambientValue =
      (typeof query.ambients === 'string' ? query.ambients : '') || ''
    const sanitizedAmbient: string = sanitizeValue(ambientValue)

    if (sanitizedAmbient) {
      const itemFilter = filtersContext.ambients.find(
        (item) => item.title.toLowerCase() === sanitizedAmbient.toLowerCase()
      )
      if (itemFilter) {
        filtersFromURL['ambients'] = [itemFilter.code]
      }
    }

    if (query.bps) {
      const queryBpsValue =
        (typeof query.bps === 'string' ? query.bps : '') || ''
      const sanitizedBpsValue = sanitizeValue(queryBpsValue!)

      const itemFilter = filtersContext?.bps?.find(
        (bp) => bp.title.toLowerCase() === sanitizedBpsValue.toLowerCase()
      )

      if (itemFilter) {
        filtersFromURL['bps'] = [itemFilter.code]
      }
    }

    if (query.styles) {
      const queryStylesValue =
        (typeof query.styles === 'string' ? query.styles : '') || ''
      const sanitizedStylesValue = sanitizeValue(queryStylesValue!)

      const itemFilter = filtersContext?.styles?.find(
        (style) =>
          style.title.toLowerCase() === sanitizedStylesValue.toLowerCase()
      )

      if (itemFilter) {
        filtersFromURL['styles'] = [itemFilter.code]
      }
    }

    if (query.nameSearched) {
      const queryNameSearchedValue =
        (typeof query.nameSearched === 'string' ? query.nameSearched : '') || ''
      const sanitizedName = sanitizeValue(queryNameSearchedValue) || ''

      filtersFromURL['nameSearched'] = sanitizedName
    }

    if (query.page) {
      filtersFromURL['page'] = query.page
    }

    return filtersFromURL
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

  function applyFilters(filters: any, originalEnvs: Array<any>) {
    console.log('applying filter: ', filters)

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
        return filters['styles'].some((style: any) => env.style.includes(style))
      })
    }
    // Scroll.animateScroll.scrollToTop()

    // console.log(filters)

    return filteredEnvs.slice()
  }

  function handleResetFilters() {
    const cleanedFilters = {
      nameSearched: '',
      bps: [],
      ambients: [],
      styles: []
    }

    resetQueriesFromUrl()
    setFilters(cleanedFilters)
    setFilteredEnvs(applyFilters(cleanedFilters, envs))
  }

  // useEffect(() => {
  //   if (
  //     initialFilters.ambients.length !== 0 ||
  //     initialFilters.bps.length !== 0 ||
  //     initialFilters.styles.length !== 0 ||
  //     initialFilters.nameSearched.length !== 0
  //   ) {
  //     setFilteredEnvs(applyFilters(filters, envs))

  //     initialFilters.ambients.length !== 0
  //       ? setCurrentFilterPanel('ambients')
  //       : initialFilters.styles.length !== 0
  //       ? setCurrentFilterPanel('styles')
  //       : initialFilters.bps.length !== 0
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filters])

  useEffect(() => {
    if (isInitialRender) {
      const queryParams: Filters = getFiltersFromURL()

      if (queryParams?.ambients) {
        changeFilterPanel('ambients')
      }
      if (queryParams?.bps) {
        changeFilterPanel('bps')
      }
      if (queryParams?.styles) {
        changeFilterPanel('styles')
      }
    }
  }, [isInitialRender])

  useEffect(() => {
    setIsInitialRender(false)
  }, [])

  useEffect(() => {
    // setFilters({ ...filters })
    setFilteredEnvs(applyFilters({ ...filters }, envs))
  }, [])

  // if (Cookies.get('cookieAccepted')) {
  //   useEffect(() => {
  //     const filtersCookie = Cookies.get('filters')
  //     if (filtersCookie) {
  //       setFilteredEnvs(applyFilters(JSON.parse(filtersCookie), envs))
  //       setDisplayFilters(true)
  //     }
  //   }, [])
  // }

  // useEffect(() => {
  //   if (Cookies.get('cookieAccepted')) {
  //     Cookies.set('filters', JSON.stringify(filters), { expires: 7 });
  //   }
  // }, [filters]);

  // useEffect(() => {
  //   // Since we already considered URL and cookies for the initial filter state,
  //   // we only need to reapply filters when "filters" state changes
  //   setFilteredEnvs(applyFilters(filters, envs));
  // }, [filters]);

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

  const [filterCount, setFilterCount] = useState('')

  useEffect(() => {
    const numEnvs =
      filters.bps.length +
      filters.ambients.length +
      filters.styles.length +
      (filters.nameSearched !== '' ? 1 : 0)
    const filtersCounterText =
      numEnvs === 1
        ? galleryViewLabels.t('filtersTab.filtersCounter1')
        : galleryViewLabels.t('filtersTab.filtersCounter')
    const environmentFoundText =
      filteredEnvs.length === 1
        ? galleryViewLabels.t('filtersTab.environmentFound1')
        : galleryViewLabels.t('filtersTab.environmentFound')
    if (numEnvs === 0) {
      setFilterCount(
        `${filteredEnvs.length} ${environmentFoundText} | ${galleryViewLabels.t(
          'filtersTab.noFiltersApplied'
        )}`
      )
    } else {
      const filterCountText = `${numEnvs} ${filtersCounterText}`
      setFilterCount(
        `${filteredEnvs.length} ${environmentFoundText} | ${filterCountText}`
      )
    }
  }, [filteredEnvs])

  // useEffect(() => {
  //   if (router.query.ambients) {
  //     const itemFilter = filtersContext.ambients.find(
  //       (item) => item.title === router.query.ambients
  //     )
  //     if (typeof itemFilter !== 'undefined') {
  //       appendFilter('ambients', itemFilter.code as any)

  //       setFilteredEnvs(
  //         applyFilters(
  //           {
  //             ...filters,
  //             ['ambients']: [itemFilter.code as any]
  //           },
  //           envs
  //         )
  //       )
  //       changeFilterPanel('ambients')
  //     }
  //   }
  // }, [router.query])

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // console.log('It works!')
        setPagination((p) => {
          const newPage = p + 1
          // handleAddQueryToUrl('page', String(newPage))
          return newPage
        })
      }
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  const galleryViewLabels = useTranslation('galleryView')
  const handleBackAction = () => {
    handleResetFilters()
  }
  return (
    <>
      <Pagebar
        paths={[
          {
            title: galleryViewLabels.t('pagebar.products'),
            url: '/products'
          },
          {
            title: galleryViewLabels.t('pagebar.bpBerneck'),
            url: '/products/bp-berneck'
          },
          {
            title: galleryViewLabels.t('pagebar.envGallery'),
            url: '/products/bp-berneck/gallery'
          }
        ]}
        goToUrl={pathname}
        onBackAction={handleBackAction}
      />

      <Box bg="white.100">
        <Container
          backgroundColor="white.100"
          maxW="1536px"
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
                onResetFilters={handleResetFilters}
                setFilters={setFilters}
                setFilteredEnvs={setFilteredEnvs}
                applyFilters={applyFilters}
                bps={availableBps}
                envs={envs}
                filters={filters}
                filtersEmpty={filtersEmpty}
                onAddQueryParam={addQueryToUrl}
                onRemoveQueryParam={removeQueryFromUrl}
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
                onResetFilters={handleResetFilters}
                setFilters={setFilters}
                setFilteredEnvs={setFilteredEnvs}
                applyFilters={applyFilters}
                bps={availableBps}
                envs={envs}
                filters={filters}
                filtersEmpty={filtersEmpty}
                onAddQueryParam={addQueryToUrl}
                onRemoveQueryParam={removeQueryFromUrl}
              />
            )}
          </Container>
          <Container
            display={isMobile && displayFilters ? 'none' : 'normal'}
            minW="100%"
          >
            <Flex
              w="100%"
              pt="50px"
              justifyContent={'flex-end'}
              alignItems="center"
            >
              <Text color={'gray.300'} fontWeight={'bold'}>
                {filterCount}
              </Text>
            </Flex>
            {filteredEnvs && filteredEnvs.length > 0 ? (
              <Center
                mt={
                  displayFilters
                    ? { base: '40px', md: '30px' }
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
                  {filteredEnvs.map((env, i) => {
                    return (
                      // i < pagination * pageSize && (
                      <GridItem key={env.id} mt="20px">
                        <Env
                          href={
                            router.locale == 'pt-BR'
                              ? `/products/bp-berneck/gallery/${env.url_code}`
                              : `/${router.locale}/products/bp-berneck/gallery/${env.url_code}`
                          }
                          title={env.title}
                          place={env.subTitle}
                          image_url={env.image_url}
                        />
                      </GridItem>
                    )
                  })}
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
                    {galleryViewLabels.t('filter.notFound')}
                  </Text>
                ) : (
                  <Text
                    alignSelf="center"
                    color="gray.300"
                    fontSize={{ base: '18px', md: '24px' }}
                    textAlign="center"
                  >
                    {galleryViewLabels.t('filter.notFoundFor')} &quot;
                    {filters['nameSearched']}&quot;
                  </Text>
                )}
              </Flex>
            )}
          </Container>
          <Box marginTop={{ base: '0', md: '300px' }} ref={ref}></Box>
        </Container>
      </Box>
    </>
  )
}
