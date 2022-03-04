/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Button,
  Text
} from '@chakra-ui/react'

import { CloseIcon, SearchIcon, Arrow, FiltersIcon } from '@components/Icons'
import { colors } from 'theme/colors'

import { FilterCheckbox } from './FilterCheckbox'
import { BPFilter } from './BPFilter'

export type FiltersSelectProps = {
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
  displayFilters: boolean
  setDisplayFilters: Function
  changeFilterPanel: Function
  appendFilter: Function
  removeFilter: Function
  resetFilters: Function
  setFilters: Function
  setFilteredEnvs: Function
  applyFilters: Function
  currentFilterPanel: string
  envs: Array<any>
  bps: Array<any>
  filters: any
  filtersEmpty: boolean
}

export const FiltersAccordion = ({
  filtersContext,
  displayFilters,
  setDisplayFilters,
  changeFilterPanel,
  currentFilterPanel,
  appendFilter,
  removeFilter,
  resetFilters,
  setFilters,
  setFilteredEnvs,
  applyFilters,
  bps,
  envs,
  filters,
  filtersEmpty
}: FiltersSelectProps) => {
  const [seeMoreBps, setSeeMoreBps] = React.useState(false)
  const [openSearchBar, setOpenSearchBar] = React.useState(false)
  const TOTAL_BPS_SHOW_FIRST = 9

  return (
    <Box background="white.200" height="100%">
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
            <Box width="100%" paddingLeft="20px" paddingRight="20px">
              <Button
                onClick={() => changeFilterPanel('bps')}
                variant="link"
                color="gray.300"
                w="100%"
                height="80px"
                fontSize="22px"
                justifyContent="start"
                alignItems="center"
              >
                <Text color="gray.300" mr="10px">
                  BP BERNECK®
                </Text>
                <Arrow
                  position="absolute"
                  right="0"
                  direction={currentFilterPanel == 'bps' ? 'down' : 'up'}
                  width="3"
                  height="6"
                  color="gray.200"
                />
              </Button>
              <Box
                display={currentFilterPanel != 'bps' ? 'none' : 'normal'}
                top="0"
                left="0"
                width="100%"
                height="100%"
                paddingBottom="25px"
              >
                <Grid
                  templateRows="repeat(auto, 1fr)"
                  templateColumns="repeat(3, 1fr)"
                  gridGap="10px"
                >
                  {(bps && bps.length <= TOTAL_BPS_SHOW_FIRST) || seeMoreBps
                    ? bps.map((bp) => (
                        <GridItem key={bp.id}>
                          <BPFilter
                            isSelected={filters['bps'].includes(bp.name)}
                            toggleSelect={(selected: boolean) => {
                              !selected
                                ? appendFilter('bps', bp.name)
                                : removeFilter('bps', bp.name)
                            }}
                            mt="10px"
                            w="100%"
                            name={bp.name}
                            texture={bp.product_texture}
                            pattern_image={bp.pattern_image}
                          />
                        </GridItem>
                      ))
                    : bps.slice(0, TOTAL_BPS_SHOW_FIRST).map((bp) => (
                        <GridItem key={bp.id}>
                          <BPFilter
                            isSelected={filters['bps'].includes(bp.name)}
                            toggleSelect={(selected: boolean) => {
                              !selected
                                ? appendFilter('bps', bp.name)
                                : removeFilter('bps', bp.name)
                            }}
                            mt="10px"
                            w="100%"
                            name={bp.name}
                            texture={bp.product_texture}
                            pattern_image={bp.pattern_image}
                          />
                        </GridItem>
                      ))}
                </Grid>
                {seeMoreBps ? (
                  <Button
                    mt="20px"
                    w="100%"
                    bg="white.100"
                    color="gray.300"
                    variant={'filters' as any}
                    _hover={{
                      bg: 'white.100'
                    }}
                    onClick={() => setSeeMoreBps(false)}
                  >
                    Ver menos
                  </Button>
                ) : (
                  bps.length >= TOTAL_BPS_SHOW_FIRST && (
                    <Button
                      mt="20px"
                      w="100%"
                      bg="white.100"
                      color="gray.300"
                      variant={'filters' as any}
                      _hover={{
                        bg: 'white.100'
                      }}
                      onClick={() => setSeeMoreBps(true)}
                    >
                      Ver mais
                    </Button>
                  )
                )}
              </Box>
            </Box>
            <Box
              background="white.100"
              width="100%"
              height="3px"
              bottom="-3px"
              left="0"
            />
            <Box width="100%" paddingLeft="20px" paddingRight="20px">
              <Button
                onClick={() => changeFilterPanel('ambients')}
                variant="link"
                color="gray.300"
                w="100%"
                height="80px"
                fontSize="22px"
                justifyContent="start"
                alignItems="center"
              >
                <Text color="gray.300" mr="10px">
                  AMBIENTE
                </Text>
                <Arrow
                  position="absolute"
                  right="0"
                  direction={currentFilterPanel == 'ambients' ? 'down' : 'up'}
                  width="3"
                  height="6"
                  color="gray.200"
                />
              </Button>
              <Box
                display={currentFilterPanel != 'ambients' ? 'none' : 'normal'}
                top="0"
                left="0"
                width="100%"
                height="100%"
                paddingBottom="25px"
              >
                <Grid
                  templateRows="repeat(auto, 1fr)"
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    xs: 'repeat(2, 1fr)'
                  }}
                  gridGap="5px"
                >
                  {filtersContext['ambients'].map((filter) => (
                    <GridItem key={filter.code}>
                      <FilterCheckbox
                        isChecked={filters['ambients'].includes(filter.code)}
                        onCheck={(isChecked: boolean, value: any) => {
                          !isChecked
                            ? appendFilter('ambients', value)
                            : removeFilter('ambients', value)
                        }}
                        title={filter.title}
                        code={filter.code}
                        w="100%"
                        mt="10px"
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box
              background="white.100"
              width="100%"
              height="3px"
              bottom="-3px"
              left="0"
            />
            <Box width="100%" paddingLeft="20px" paddingRight="20px">
              <Button
                onClick={() => changeFilterPanel('styles')}
                variant="link"
                color="gray.300"
                w="100%"
                height="80px"
                fontSize="22px"
                justifyContent="start"
                alignItems="center"
              >
                <Text color="gray.300" mr="10px">
                  ESTILO
                </Text>
                <Arrow
                  position="absolute"
                  right="0"
                  direction={currentFilterPanel == 'styles' ? 'down' : 'up'}
                  width="3"
                  height="6"
                  color="gray.200"
                />
              </Button>
              <Box
                display={currentFilterPanel != 'styles' ? 'none' : 'normal'}
                top="0"
                left="0"
                width="100%"
                height="100%"
                paddingBottom="25px"
              >
                <Grid
                  templateRows="repeat(auto, 1fr)"
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    xs: 'repeat(2, 1fr)'
                  }}
                  gridGap="5px"
                >
                  {filtersContext['styles'].map((filter) => (
                    <GridItem key={filter.code}>
                      <FilterCheckbox
                        isChecked={filters['styles'].includes(filter.code)}
                        onCheck={(isChecked: boolean, value: any) => {
                          !isChecked
                            ? appendFilter('styles', value)
                            : removeFilter('styles', value)
                        }}
                        title={filter.title}
                        code={filter.code}
                        mt="10px"
                        w="100%"
                      />
                    </GridItem>
                  ))}
                </Grid>
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
          variant={'filters' as any}
          mr="30px"
          onClick={() => {
            setFilteredEnvs(applyFilters(filters, envs))
            setDisplayFilters(false)
          }}
        >
          Filtrar
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
              value={filters.nameSearched}
              height={{ base: '30px' }}
              onChange={(e) => {
                setFilters({ ...filters, nameSearched: e.target.value })
              }}
            />
            <Box>
              <SearchIcon
                onClick={() => setFilteredEnvs(applyFilters(filters, envs))}
                stroke={colors.white[100]}
                width="30px"
                height={{ base: '25px', md: '10px', '2xl': '0px' }}
              />
            </Box>
          </Flex>
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
              onClick={() => resetFilters()}
              variant="link"
              backgroundColor="none"
            >
              Limpar filtros
            </Button>
          </Flex>
        </>
      )}
    </Box>
  )
}
