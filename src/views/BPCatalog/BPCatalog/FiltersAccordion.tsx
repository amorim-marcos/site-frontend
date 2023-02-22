/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import { Box, Flex, Text, Button, Select, Input } from '@chakra-ui/react'

import {
  Arrow,
  FiltersIcon,
  BigGridIcon,
  MidGridIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  FiltersDarkModeIcon,
  CloseIcon
} from '@components/Icons'

import { colors } from 'theme/colors'
import { FilterCheckbox } from './FilterCheckbox'
import { initialFilters } from './'
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
  filteredBpsLength: number
}

export const FiltersAccordion = ({
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
  filtersEmpty
}: FiltersSelectProps) => {
  const [openSearchBar, setOpenSearchBar] = React.useState(false)

  const bpCatalog = useTranslation('bpCatalog')



  return (
    <>
      <Box backgroundColor={darkMode ? 'gray.400' : 'white.200'} height="150%">
        <Flex
          padding={{ base: '25px' }}
          justifyContent="space-between"
          alignItems="center"
          minH="80px"
        >
          <Button
            zIndex="10"
            onClick={() => {
              setDisplayFilters(!displayFilters)
              setOpenSearchBar(false)
            }}
            variant="link"
            backgroundColor="none"
          >
            {displayFilters ? (
              <CloseIcon mr="16px" w="22px" h="22px" color="#8BB879" />
            ) : (
              <FiltersIcon mr="16px" />
            )}
            <Text color={darkMode ? 'green.300' : 'gray.300'} fontSize="17px">
              {!displayFilters
                ? bpCatalog.t('filtersAccordion.filterResults')
                : bpCatalog.t('filtersAccordion.hideFilters')}
            </Text>
            <Arrow
              color={darkMode ? 'green.300' : 'gray.300'}
              display={{ base: 'none', md: 'normal' }}
              visibility={displayFilters ? 'hidden' : 'visible'}
              ml="10px"
              direction="right"
              width="3"
              height="6"
            />
          </Button>
          {!displayFilters && (
            <Box zIndex="11" right="0">
              {openSearchBar ? (
                <CloseIcon
                  w="30px"
                  h="30px"
                  color="#8BB879"
                  onClick={() => setOpenSearchBar(false)}
                  cursor="pointer"
                />
              ) : (
                <SearchIcon
                  width="36px"
                  stroke={colors.gray[300]}
                  onClick={() => setOpenSearchBar(true)}
                />
              )}
            </Box>
          )}
        </Flex>
        {displayFilters && (
          <Box margin="0" width="100%">
            <Flex direction="column">
              <Box
                background="white.100"
                width="100%"
                height="3px"
                bottom="-3px"
                left="0"
              />
              <Box
                width="100%"
                backgroundColor={darkMode ? 'gray.400' : 'white.200'}
                paddingLeft="20px"
                paddingRight="20px"
              >
                <Button
                  onClick={() => changeFilterPanel('panels')}
                  variant="link"
                  color="gray.300"
                  w="100%"
                  height="80px"
                  fontSize="22px"
                  justifyContent="start"
                  alignItems="center"
                  _focus={{ outline: 'none' }}
                >
                  <Text
                    fontSize="17px"
                    color={darkMode ? 'green.300' : 'gray.300'}
                    mr="10px"
                  >
                    {bpCatalog.t('filtersAccordion.panels')}
                  </Text>
                  <Arrow
                    position="absolute"
                    right="0"
                    direction={currentFilterPanel == 'panels' ? 'down' : 'up'}
                    width="3"
                    height="6"
                    color="gray.200"
                  />
                </Button>
                <Box
                  display={currentFilterPanel != 'panels' ? 'none' : 'normal'}
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  paddingBottom="25px"
                >
                  {panels.map((filter) => (
                    <FilterCheckbox
                      mb="10px"
                      minW={{ base: '100%', sm: '48%' }}
                      mr={{ base: 0, sm: '2%' }}
                      isChecked={filtersBP['panels'].includes(filter.code)}
                      onCheck={(isChecked: boolean, value: any) => {
                        !isChecked
                          ? appendFilter('panels', value)
                          : removeFilter('panels', value)
                      }}
                      title={filter.title}
                      code={filter.code}
                      background_image={filter.background_image}
                      key={'panels' + filter.code}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                background="white.100"
                width="100%"
                height="3px"
                bottom="-3px"
                left="0"
              />
              <Box
                width="100%"
                backgroundColor={darkMode ? 'gray.400' : 'white.200'}
                paddingLeft="20px"
                paddingRight="20px"
              >
                <Button
                  onClick={() => changeFilterPanel('collections')}
                  variant="link"
                  color="gray.300"
                  w="100%"
                  height="80px"
                  fontSize="22px"
                  justifyContent="start"
                  alignItems="center"
                  _focus={{ outline: 'none' }}
                >
                  <Text
                    fontSize="17px"
                    color={darkMode ? 'green.300' : 'gray.300'}
                    mr="10px"
                  >
                    {bpCatalog.t('filtersAccordion.collections')}
                  </Text>
                  <Arrow
                    position="absolute"
                    right="0"
                    direction={
                      currentFilterPanel == 'collections' ? 'down' : 'up'
                    }
                    width="3"
                    height="6"
                    color="gray.200"
                  />
                </Button>
                <Box
                  display={
                    currentFilterPanel != 'collections' ? 'none' : 'normal'
                  }
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  paddingBottom="25px"
                >
                  {collections.map((filter) => (
                    <FilterCheckbox
                      key={filter.code}
                      minW={{ base: '100%', sm: '48%' }}
                      mr={{ base: 0, sm: '2%' }}
                      mb="10px"
                      isChecked={filtersBP['collections'].includes(filter.code)}
                      onCheck={(isChecked: boolean, value: any) => {
                        !isChecked
                          ? appendFilter('collections', value)
                          : removeFilter('collections', value)
                      }}
                      title={filter.title}
                      code={filter.code}
                      background_image={filter.background_image}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                background="white.100"
                width="100%"
                height="3px"
                bottom="-3px"
                left="0"
              />
              <Box
                width="100%"
                backgroundColor={darkMode ? 'gray.400' : 'white.200'}
                paddingLeft="20px"
                paddingRight="20px"
              >
                <Button
                  onClick={() => changeFilterPanel('colorations')}
                  variant="link"
                  color="gray.300"
                  w="100%"
                  height="80px"
                  fontSize="22px"
                  justifyContent="start"
                  alignItems="center"
                  _focus={{ outline: 'none' }}
                >
                  <Text
                    fontSize="17px"
                    color={darkMode ? 'green.300' : 'gray.300'}
                    mr="10px"
                  >
                    {bpCatalog.t('filtersAccordion.coloration')}
                  </Text>
                  <Arrow
                    position="absolute"
                    right="0"
                    direction={
                      currentFilterPanel == 'colorations' ? 'down' : 'up'
                    }
                    width="3"
                    height="6"
                    color="gray.200"
                  />
                </Button>
                <Box
                  display={
                    currentFilterPanel != 'colorations' ? 'none' : 'normal'
                  }
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  paddingBottom="25px"
                  mb="50px"
                >
                  {colorations.map((filter) => (
                    <FilterCheckbox
                      color="white.100"
                      key={filter.code}
                      minW={{ base: '100%', sm: '48%' }}
                      mr={{ base: 0, sm: '2%' }}
                      mb="10px"
                      isChecked={filtersBP['colorations'].includes(filter.code)}
                      onCheck={(isChecked: boolean, value: any) => {
                        !isChecked
                          ? appendFilter('colorations', value)
                          : removeFilter('colorations', value)
                      }}
                      title={filter.title}
                      code={filter.code}
                      background_image={filter.background_image}
                    />
                  ))}
                </Box>
              </Box>
              <Box
                background="white.100"
                width="100%"
                height="3px"
                bottom="-3px"
                left="0"
              />
            </Flex>
          </Box>
        )}
        {displayFilters && currentFilterPanel != 'none' && (
          <Button
            zIndex="11"
            w="100%"
            position="fixed"
            bottom="0"
            variant={'filtersBP' as any}
            mr="30px"
            onClick={() => {
              setFilteredBps(applyFilters(filtersBP, bps))
              setDisplayFilters(false)
            }}
          >
            {bpCatalog.t('filtersAccordion.filter')}
          </Button>
        )}
        {openSearchBar && (
          <Flex
            height="65px"
            bg="green.550"
            width="100%"
            top="100%"
            alignItems="center"
            justifyContent="center"
            zIndex="docked"
            padding="25px"
          >
            <Flex
              width="100%"
              borderBottom="solid"
              borderBottomColor="white.100"
              paddingX="5px"
              height="30px"
              borderBottomWidth={{ base: '1px' }}
            >
              <Input
                placeholder="Digite sua busca"
                border="none"
                outline="none"
                _active={{ border: 'none', outline: 'none' }}
                focusBorderColor="none"
                color="white.100"
                paddingLeft="0px"
                paddingBottom={{ base: '0px', md: '10px' }}
                fontSize="15px"
                _placeholder={{
                  color: 'white.100'
                }}
                value={filtersBP.nameSearched}
                height={{ base: '30px' }}
                onChange={(e) => {
                  setFilters({ ...filtersBP, nameSearched: e.target.value })
                }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter')
                    setFilteredBps(applyFilters(filtersBP, bps))
                }}
              />
              <Box>
                <SearchIcon
                  onClick={() => setFilteredBps(applyFilters(filtersBP, bps))}
                  stroke={colors.white[100]}
                  width="30px"
                  height={{ base: '25px', md: '10px', '2xl': '0px' }}
                />
              </Box>
            </Flex>
          </Flex>
        )}
        {!displayFilters && (
          <Flex
            minW="100%"
            height="100px"
            background={darkMode ? 'gray.350' : 'gray.100'}
            justifyContent="center"
            alignItems="center"
          >
            <Select
              onChange={(e) => {
                setFilters({ ...filtersBP, orderBy: e.target.value })
                setFilteredBps(
                  applyFilters({ ...filtersBP, orderBy: e.target.value }, bps)
                )
              }}
              value={filtersBP['orderBy']}
              color={darkMode ? 'green.300' : 'gray.300'}
              border="0"
              backgroundColor={darkMode ? 'gray.400' : 'white.100'}
              width="160px"
              fontSize="16px"
              mr="10px"
              variant="flushed"
              _focus={{ outline: 'none' }}
            >
              <option disabled>
                {bpCatalog.t('filtersAccordion.orderBy')}
              </option>
              <option value="launch">
                {bpCatalog.t('filtersAccordion.launch')}
              </option>
              <option value="name">
                {bpCatalog.t('filtersAccordion.name')}
              </option>
              <option value="scale">
                {bpCatalog.t('filtersAccordion.colorScale')}
              </option>
            </Select>

            <Box>
              <Flex justifyContent="center" alignItems="center">
                <Button
                  onClick={() => changeGridSize('mobile-big')}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                >
                  <BigGridIcon
                    color={gridSize == 'mobile-big' ? 'green.500' : 'gray.200'}
                  />
                </Button>

                <Button
                  onClick={() => changeGridSize('mobile-medium')}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                >
                  <MidGridIcon
                    color={
                      gridSize == 'mobile-medium' ? 'green.500' : 'gray.200'
                    }
                  />
                </Button>
              </Flex>
            </Box>

            <Box>
              <Flex justifyContent="center" alignItems="center">
                <Box position="relative" display="inline-block" mr="15px">
                  <SunIcon color={darkMode ? 'green.300' : 'gray.300'} />
                </Box>

                <Button
                  onClick={() => setDarkMode(!darkMode)}
                  variant="link"
                  display="inline-block"
                  mr="15px"
                >
                  <FiltersDarkModeIcon activated={darkMode} />
                </Button>

                <Box position="relative" display="inline-block">
                  <MoonIcon color={darkMode ? 'green.300' : 'gray.300'} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        )}
        {!displayFilters && !filtersEmpty && (
          <>
            <Box
              background="white.100"
              width="100%"
              height="3px"
              bottom="-3px"
              left="0"
            />
            <Flex
              paddingLeft={{ base: '20px', md: '30px' }}
              justifyContent="center"
              alignItems="center"
              minH="50px"
            >
              <Button
                zIndex="10"
                onClick={() => {
                  setFilters(JSON.parse(JSON.stringify(initialFilters)))
                  setFilteredBps(applyFilters(initialFilters, bps))
                  setDisplayFilters(!displayFilters)
                }}
                variant="link"
                backgroundColor="none"
              >
                {bpCatalog.t('filtersAccordion.clearFilters')}
              </Button>
            </Flex>
          </>
        )}
      </Box>
    </>
  )
}
