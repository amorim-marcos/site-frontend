/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import { Box, Flex, Input, Button, Text, Center } from '@chakra-ui/react'

import { CloseIcon, SearchIcon, Arrow, FiltersIcon } from '@components/Icons'
import { colors } from 'theme/colors'

import { filtersCheckboxes, initialFilters } from '.'
import { FilterCheckbox } from './FilterCheckbox'
import { BPFilter } from './BPFilter'

export type FiltersSelectProps = {
  displayFilters: boolean
  setDisplayFilters: Function
  changeFilterPanel: Function
  appendFilter: Function
  removeFilter: Function
  setFilters: Function
  setFilteredEnvs: Function
  applyFilters: Function
  currentFilterPanel: string
  envs: Array<any>
  bps: Array<any>
  filters: any
  filtersEmpty: boolean
}

export const FiltersTabs = ({
  displayFilters,
  setDisplayFilters,
  changeFilterPanel,
  currentFilterPanel,
  appendFilter,
  removeFilter,
  setFilters,
  setFilteredEnvs,
  applyFilters,
  bps,
  envs,
  filters,
  filtersEmpty
}: FiltersSelectProps) => {
  const [searchSelected, setSearchSelected] = React.useState(false)

  return (
    <Box background="white.200" minH="80px">
      <Box
        position={{ base: 'relative', md: 'absolute' }}
        paddingTop="30px"
        left={{ base: '20px', md: '30px' }}
      >
        <Button
          zIndex="10"
          onClick={() => setDisplayFilters(!displayFilters)}
          variant="link"
          backgroundColor="none"
        >
          {displayFilters ? (
            <CloseIcon mr="16px" w="22px" h="22px" color="#8BB879" />
          ) : (
            <FiltersIcon mr="16px" />
          )}
          <Text fontSize="17px">
            {!displayFilters ? 'Filtrar Resultados' : 'Esconder filtros'}
          </Text>
          <Arrow
            display={{ base: 'none', md: 'normal' }}
            visibility={displayFilters ? 'hidden' : 'visible'}
            ml="10px"
            direction="right"
            width="3"
            height="6"
            color="gray.300"
          />
        </Button>
      </Box>
      {displayFilters && (
        <Box margin="0" paddingTop="30px">
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
                    onClick={() => changeFilterPanel('bps')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'bps' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                  >
                    <Text color="gray.300" mr="10px">
                      BP BERNECK®
                    </Text>
                    <Arrow
                      direction={currentFilterPanel == 'bps' ? 'down' : 'up'}
                      width="3"
                      height="6"
                      color="gray.200"
                    />
                  </Button>
                  <Button
                    onClick={() => changeFilterPanel('ambients')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'ambients' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                  >
                    <Text color="gray.300" mr="10px">
                      AMBIENTE
                    </Text>
                    <Arrow
                      direction={
                        currentFilterPanel == 'ambients' ? 'down' : 'up'
                      }
                      width="3"
                      height="6"
                      color="gray.200"
                    />
                  </Button>
                  <Button
                    onClick={() => changeFilterPanel('styles')}
                    variant="link"
                    color="gray.300"
                    w="180px"
                    h="30px"
                    borderBottom={
                      currentFilterPanel == 'styles' ? 'solid' : 'none'
                    }
                    borderBottomColor={'green.500'}
                    borderBottomWidth={{ base: '4px' }}
                    fontSize="22px"
                  >
                    <Text color="gray.300" mr="10px">
                      ESTILO
                    </Text>
                    <Arrow
                      direction={currentFilterPanel == 'styles' ? 'down' : 'up'}
                      width="3"
                      height="6"
                      color="gray.200"
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
                  display={currentFilterPanel != 'bps' ? 'none' : 'normal'}
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Flex alignItems="flex-start" wrap="wrap">
                    {bps &&
                      bps.map((bp) => (
                        <BPFilter
                          key={bp.id}
                          isSelected={filters['bps'].includes(bp.name)}
                          toggleSelect={(selected: boolean) => {
                            !selected
                              ? appendFilter('bps', bp.name)
                              : removeFilter('bps', bp.name)
                          }}
                          mr="15px"
                          mt="10px"
                          name={bp.name}
                          texture={bp.product_texture}
                          pattern_image={bp.pattern_image}
                        />
                      ))}
                  </Flex>
                </Box>
                <Box
                  display={currentFilterPanel != 'ambients' ? 'none' : 'normal'}
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Center>
                    <Flex justifyContent="flex-start" wrap="wrap">
                      {filtersCheckboxes['ambients'].map((filter) => (
                        <FilterCheckbox
                          key={filter.code}
                          isChecked={filters['ambients'].includes(filter.code)}
                          onCheck={(isChecked: boolean, value: any) => {
                            !isChecked
                              ? appendFilter('ambients', value)
                              : removeFilter('ambients', value)
                          }}
                          title={filter.title}
                          code={filter.code}
                          mr="15px"
                          mt="10px"
                        />
                      ))}
                    </Flex>
                  </Center>
                </Box>
                <Box
                  display={currentFilterPanel != 'styles' ? 'none' : 'normal'}
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                >
                  <Center>
                    <Flex justifyContent="flex-start" wrap="wrap">
                      {filtersCheckboxes['styles'].map((filter) => (
                        <FilterCheckbox
                          key={filter.code}
                          isChecked={filters['styles'].includes(filter.code)}
                          onCheck={(isChecked: boolean, value: any) => {
                            !isChecked
                              ? appendFilter('styles', value)
                              : removeFilter('styles', value)
                          }}
                          title={filter.title}
                          code={filter.code}
                          mr="15px"
                          mt="10px"
                        />
                      ))}
                    </Flex>
                  </Center>
                </Box>
                <Flex justifyContent="center" padding="30px">
                  <Button
                    variant={'filters' as any}
                    mr="30px"
                    onClick={() => setFilteredEnvs(applyFilters(filters, envs))}
                  >
                    Filtrar
                  </Button>
                  {!filtersEmpty && (
                    <Button
                      variant={'filters' as any}
                      onClick={() => {
                        setFilters(JSON.parse(JSON.stringify(initialFilters)))
                        setFilteredEnvs(applyFilters(initialFilters, envs))
                      }}
                    >
                      Limpar filtros
                    </Button>
                  )}
                </Flex>
              </Center>
              <Box position="absolute" top="0" right="50px">
                <Flex
                  width={{
                    base: '100px',
                    md: '200px',
                    lg: '250px',
                    xl: '300px',
                    '2xl': '350px'
                  }}
                  borderBottom="solid"
                  borderBottomColor={searchSelected ? 'green.500' : 'gray.300'}
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
                    placeholder="Pesquise pelo nome"
                    _placeholder={{ color: 'gray.300' }}
                    border="none"
                    outline="none"
                    _active={{ border: 'none', outline: 'none' }}
                    focusBorderColor="none"
                    color="gray.300"
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
                      setFilters({ ...filters, nameSearched: e.target.value })
                    }}
                  />
                  <Box>
                    <SearchIcon
                      onClick={() =>
                        setFilteredEnvs(applyFilters(filters, envs))
                      }
                      stroke={
                        searchSelected ? colors.green[500] : colors.gray[300]
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
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  )
}
