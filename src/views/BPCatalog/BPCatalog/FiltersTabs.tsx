/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import {
  Box,
  Flex,
  Text,
  Button,
  Select,
  Input,
  Center
} from '@chakra-ui/react'

import {
  Arrow,
  FiltersIcon,
  BigGridIcon,
  MidGridIcon,
  SmallGridIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  FiltersDarkModeIcon,
  CloseIcon
} from '@components/Icons'

import { colors } from 'theme/colors'
import { initialFilters } from './'
import { FilterCheckbox } from './FilterCheckbox'
import { useTranslation } from 'react-i18next'

export type FiltersSelectProps = {
  darkMode: boolean
  setDarkMode: Function
  displayFilters: boolean
  setDisplayFilters: Function
  changeFilterPanel: Function
  appendFilter: Function
  removeFilter: Function
  setFilters: Function
  bps: Array<any>
  setFilteredBps: Function
  applyFilters: Function
  gridSize: string
  changeGridSize: Function
  currentFilterPanel: string
  panels: Array<any>
  collections: Array<any>
  colorations: Array<any>
  filtersBP: any
  filtersEmpty: boolean
}

export const FiltersTabs = ({
  darkMode,
  setDarkMode,
  displayFilters,
  setDisplayFilters,
  changeFilterPanel,
  currentFilterPanel,
  panels,
  collections,
  colorations,
  appendFilter,
  gridSize,
  changeGridSize,
  removeFilter,
  setFilters,
  bps,
  setFilteredBps,
  applyFilters,
  filtersBP,
  filtersEmpty,
}: FiltersSelectProps) => {
  const [searchSelected, setSearchSelected] = React.useState(false)

  const bpCatalog = useTranslation('bpCatalog')

  // organiza o array de coleções por data de lançamento
  const sortedCollections = collections.sort((a, b) => {
    const dateA = Date.parse(a.release_date);
    const dateB = Date.parse(b.release_date);
    return dateB - dateA;
  });
  

  return (
    <>
      <Button
        zIndex="10"
        onClick={() => setDisplayFilters(!displayFilters)}
        variant="link"
        backgroundColor="none"
        position="absolute"
        top="0"
        left="30px"
      >
        {displayFilters ? (
          <CloseIcon mr="16px" w="22px" h="22px" color="#8BB879" />
        ) : (
          <FiltersIcon mr="16px" />
        )}
        <Text color={darkMode ? 'green.300' : 'gray.300'} fontSize="17px">
          {!displayFilters
            ? bpCatalog.t('filtersTab.filterResults')
            : bpCatalog.t('filtersTab.hideFilters')}
        </Text>
        <Arrow
          visibility={displayFilters ? 'hidden' : 'visible'}
          ml="10px"
          direction="right"
          width="3"
          height="6"
          color={darkMode ? 'green.300' : 'gray.300'}
        />
      </Button>
      {displayFilters && (
        <Box margin="0">
          <Box>
            <Flex position="relative" direction="column">
              <Center>
                <Box
                  position="absolute"
                  background="green.600"
                  width="650px"
                  height="6px"
                  bottom="-3px"
                />
              </Center>
              <Center mb="20px">
                <Flex justifyContent="space-between">
                  <Button
                    onClick={() => changeFilterPanel('panels')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'panels' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                    _focus={{ outline: 'none' }}
                  >
                    <Text color={darkMode ? 'green.300' : 'gray.300'} mr="10px">
                      {bpCatalog.t('filtersTab.panels')}
                    </Text>
                    <Arrow
                      direction={currentFilterPanel == 'panels' ? 'up' : 'down'}
                      width="3"
                      height="6"
                      color={darkMode ? 'green.200' : 'gray.200'}
                    />
                  </Button>
                  <Button
                    onClick={() => changeFilterPanel('collections')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'collections' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                    _focus={{ outline: 'none' }}
                  >
                    <Text color={darkMode ? 'green.300' : 'gray.300'} mr="10px">
                      {bpCatalog.t('filtersTab.collections')}
                    </Text>
                    <Arrow
                      direction={
                        currentFilterPanel == 'collections' ? 'up' : 'down'
                      }
                      width="3"
                      height="6"
                      color={darkMode ? 'green.200' : 'gray.200'}
                    />
                  </Button>
                  <Button
                    onClick={() => changeFilterPanel('colorations')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'colorations' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                    _focus={{ outline: 'none' }}
                  >
                    <Text color={darkMode ? 'green.300' : 'gray.300'} mr="10px">
                      {bpCatalog.t('filtersTab.coloration')}
                    </Text>
                    <Arrow
                      direction={
                        currentFilterPanel == 'colorations' ? 'up' : 'down'
                      }
                      width="3"
                      height="6"
                      color={darkMode ? 'green.200' : 'gray.200'}
                    />
                  </Button>
                </Flex>
              </Center>
              <Center
                position="relative"
                display={currentFilterPanel == 'none' ? 'none' : 'normal'}
                flex={1}
                minH="100px"
              >
                <Box
                  display={currentFilterPanel != 'panels' ? 'none' : 'normal'}
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Flex justifyContent="center" wrap="wrap">
                    {panels.map((filter) => (
                      <FilterCheckbox
                        isChecked={filtersBP['panels'].includes(filter.code)}
                        onCheck={(isChecked: boolean, value: any) => {
                          !isChecked
                            ? appendFilter('panels', value)
                            : removeFilter('panels', value)
                        }}
                        title={filter.title}
                        code={filter.code}
                        background_image={filter.background_image}
                        mr="30px"
                        mb="10px"
                        key={'panels' + filter.code}
                      />
                    ))}
                  </Flex>
                </Box>
                <Box
                  display={
                    currentFilterPanel != 'collections' ? 'none' : 'normal'
                  }
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Flex justifyContent="center" wrap="wrap">
                    {sortedCollections.map((filter) => (
                      <FilterCheckbox
                        key={filter.code}
                        isChecked={filtersBP['collections'].includes(
                          filter.code
                        )}
                        onCheck={(isChecked: boolean, value: any) => {
                          !isChecked
                            ? appendFilter('collections', value)
                            : removeFilter('collections', value)
                        }}
                        title={filter.title}
                        code={filter.code}
                        background_image={filter.background_image}
                        mr="30px"
                        mb="10px"
                      />
                    ))}
                  </Flex>
                </Box>
                <Box
                  display={
                    currentFilterPanel != 'colorations' ? 'none' : 'normal'
                  }
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Flex justifyContent="center" wrap="wrap">
                    {colorations.map((filter) => (
                      <FilterCheckbox
                        color="white.100"
                        key={filter.code}
                        isChecked={filtersBP['colorations'].includes(filter.code)}
                        onCheck={(isChecked: boolean, value: any) => {
                          !isChecked
                            ? appendFilter('colorations', value)
                            : removeFilter('colorations', value)
                        }}
                        title={filter.title}
                        code={filter.code}
                        background_image={filter.background_image}
                        mr="30px"
                        mb="10px"
                      />
                    ))}
                  </Flex>
                </Box>
                <Flex justifyContent="center" padding="30px">
                  <Button
                    variant={'filters' as any}
                    mr="30px"
                    onClick={() => {
                      setFilteredBps(applyFilters(filtersBP, bps))
                      setDisplayFilters(!displayFilters)
                    }}
                    _focus={{ outline: 'none' }}
                  >
                    {bpCatalog.t('filtersTab.filter')}
                  </Button>
                  {!filtersEmpty && (
                    <Button
                      variant={'filters' as any}
                      onClick={() => {
                        setFilters(JSON.parse(JSON.stringify(initialFilters)))
                        setFilteredBps(applyFilters(initialFilters, bps))
                        setDisplayFilters(!displayFilters)
                      }}
                      _focus={{ outline: 'none' }}
                    >
                      {bpCatalog.t('filtersTab.clearFilters')}
                    </Button>
                  )}
                </Flex>
              </Center>
            </Flex>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            minW="100%"
            height="100px"
            background={darkMode ? 'gray.350' : 'gray.100'}
          >
            <Text
              color={darkMode ? 'green.300' : 'gray.300'}
              display="inline-block"
              fontSize="16px"
              mr="15px"
            >
              {bpCatalog.t('filtersTab.orderBy')}
            </Text>
            <Select
              onChange={(e) => {
                setFilters({ ...filtersBP, orderBy: e.target.value })
                setFilteredBps(
                  applyFilters({ ...filtersBP, orderBy: e.target.value }, bps)
                )
              }}
              value={filtersBP['orderBy']}
              mr="30px"
              color={darkMode ? 'green.300' : 'gray.300'}
              position="relative"
              display="inline-block"
              border="0"
              backgroundColor={darkMode ? 'gray.400' : 'white.100'}
              width="160px"
              fontSize="16px"
              _focus={{ outline: 'none' }}
            >
              <option value="launch">{bpCatalog.t('filtersTab.launch')}</option>
              <option value="name">{bpCatalog.t('filtersTab.name')}</option>
              <option value="scale">
                {bpCatalog.t('filtersTab.colorScale')}
              </option>
            </Select>

            <Box position="relative" display="inline-block" mr="30px">
              <Flex justifyContent="center" alignItems="center">
                <Text
                  color={darkMode ? 'green.300' : 'gray.300'}
                  display="inline-block"
                  fontSize="16px"
                  mr="15px"
                >
                  {bpCatalog.t('filtersTab.exhibitionFormat')}
                </Text>

                <Button
                  onClick={() => changeGridSize('big')}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                  _focus={{ outline: 'none' }}
                >
                  <BigGridIcon
                    color={gridSize == 'big' ? 'green.500' : 'gray.200'}
                  />
                </Button>

                <Button
                  onClick={() => changeGridSize('medium')}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                  _focus={{ outline: 'none' }}
                >
                  <MidGridIcon
                    color={gridSize == 'medium' ? 'green.500' : 'gray.200'}
                  />
                </Button>

                <Button
                  onClick={() => changeGridSize('small')}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                  _focus={{ outline: 'none' }}
                >
                  <SmallGridIcon
                    color={gridSize == 'small' ? 'green.500' : 'gray.200'}
                  />
                </Button>
              </Flex>
            </Box>

            <Box position="relative" display="inline-block" mr="30px">
              <Box position="relative" display="inline-block">
                <Flex
                  width={{
                    base: '100px',
                    md: '200px',
                    lg: '250px',
                    xl: '300px',
                    '2xl': '350px'
                  }}
                  borderBottom="solid"
                  borderBottomColor={
                    searchSelected
                      ? 'green.500'
                      : darkMode
                      ? 'green.300'
                      : 'gray.300'
                  }
                  paddingX="5px"
                  height={{ base: '25px' }}
                  borderBottomWidth={{ base: '2px' }}
                >
                  <Input
                    onFocus={() => {
                      setSearchSelected(true)
                    }}
                    onBlur={() => {
                      setSearchSelected(false)
                    }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter')
                        setFilteredBps(applyFilters(filtersBP, bps))
                    }}
                    placeholder={bpCatalog.t('filtersTab.searchByName')}
                    _placeholder={{
                      color: darkMode ? 'green.300' : 'gray.300'
                    }}
                    border="none"
                    outline="none"
                    _active={{ border: 'none', outline: 'none' }}
                    focusBorderColor="none"
                    color={darkMode ? 'green.300' : 'gray.300'}
                    paddingLeft="0px"
                    paddingBottom={{ base: '0px', md: '10px' }}
                    fontSize={{
                      base: '8px',
                      md: '10px',
                      lg: '12px',
                      xl: '14px',
                      '2xl': '16px'
                    }}
                    height={{ base: '30px' }}
                    onChange={(e) => {
                      setFilters({ ...filtersBP, nameSearched: e.target.value })
                    }}
                  />
                  <Box>
                    <SearchIcon
                      onClick={() => setFilteredBps(applyFilters(filtersBP, bps))}
                      stroke={
                        searchSelected
                          ? colors.green[500]
                          : darkMode
                          ? colors.green[300]
                          : colors.gray[300]
                      }
                      width={{
                        base: '13px',
                        md: '16px',
                        lg: '23px',
                        xl: '28px',
                        '2xl': '35px'
                      }}
                      height={{ base: '25px', md: '10px', '2xl': '0px' }}
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box position="relative" display="inline-block">
              <Flex justifyContent="center" alignItems="center">
                <Text
                  color={darkMode ? 'green.300' : 'gray.300'}
                  display="inline-block"
                  fontSize="16px"
                  mr="15px"
                >
                  {bpCatalog.t('filtersTab.bgColor')}
                </Text>

                <Box position="relative" display="inline-block" mr="15px">
                  <SunIcon color={darkMode ? 'green.300' : 'gray.300'} />
                </Box>

                <Button
                  onClick={() => setDarkMode(!darkMode)}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                  _focus={{ outline: 'none' }}
                >
                  <FiltersDarkModeIcon activated={darkMode} />
                </Button>

                <Box position="relative" display="inline-block">
                  <MoonIcon color={darkMode ? 'green.300' : 'gray.300'} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      )}

    </>
  )
}
