/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

import {
  Container,
  Box,
  Grid,
  GridItem,
  Flex,
  Link,
  Text,
  Image,
  Button,
  Input,
  Center,
  Checkbox,
  BoxProps,
  LinkProps,
  ButtonProps
} from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import { Arrow, SearchIcon, FiltersIcon, CloseIcon } from '@components/Icons'

import { colors } from 'theme/colors'
import useMobile from 'hooks/useMobile'

export type EnvProps = LinkProps & {
  type: string
  name: string
  image_url: string
}

const Env = ({ type, name, image_url, ...props }: EnvProps) => {
  return (
    <Link {...props}>
      <Flex
        direction="column"
        width={{
          base: '184px',
          xs: '367px',
          sm: '508px',
          md: '367px',
          '2xl': '508px'
        }}
      >
        <Box
          overflow="hidden"
          width={{
            base: '184px',
            xs: '367px',
            sm: '508px',
            md: '367px',
            '2xl': '508px'
          }}
          height={{
            base: '137px',
            xs: '274px',
            sm: '369px',
            md: '274px',
            '2xl': '369px'
          }}
        >
          <Image
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            overflow="hidden"
            flex={1}
            src={image_url}
          />
        </Box>
        <Text
          width="100%"
          flex={1}
          fontSize={{ base: '23px', lg: '31px' }}
          variant={'body-bold' as any}
        >
          {type}
        </Text>
        <Text width="100%" flex={1} fontSize={{ base: '17px', lg: '28px' }}>
          {name}
        </Text>
      </Flex>
    </Link>
  )
}

type BPFilterProps = ButtonProps & {
  name: string
  texture: string
  pattern_image: string
  isSelected?: boolean
  toggleSelect?: Function
}

const BPFilter = ({
  name,
  texture,
  pattern_image,
  isSelected = false,
  toggleSelect,
  ...props
}: BPFilterProps) => {
  const [displayInfo, setDisplayInfo] = React.useState(false)
  const [selected, setSelected] = React.useState(false)

  React.useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  return (
    <Button
      zIndex="5"
      onClick={() => toggleSelect && toggleSelect(selected)}
      onMouseEnter={() => setDisplayInfo(true)}
      onMouseLeave={() => setDisplayInfo(false)}
      height={{ base: '43px', md: '55px' }}
      {...props}
    >
      <Box
        boxShadow={selected ? '0px 0px 3px green' : 'none'}
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
        width="100%"
        height="100%"
        borderRadius="5px"
        padding="0"
        margin="0"
        backgroundImage={`url(${pattern_image})`}
        backgroundRepeat="repeat"
        backgroundSize="cover"
      ></Box>
      <Box
        display={!displayInfo && !selected ? 'none' : 'normal'}
        zIndex="2"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundColor="white.100"
        opacity="0.6"
      ></Box>
      <Box
        display={!displayInfo && !selected ? 'none' : 'normal'}
        zIndex="3"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      >
        <Flex
          direction="column"
          alignItems="flex-start"
          mt="5px"
          ml="5px"
          color="gray.400"
        >
          <Text
            fontSize={{ base: '11px', md: '16px' }}
            variant={'body-bold' as any}
          >
            {name}
          </Text>
          <Text
            display={{ base: 'none', xs: 'inherit' }}
            fontSize={{ base: '10px', md: '14px' }}
            color="gray.600"
          >
            {texture}
          </Text>
        </Flex>
      </Box>
    </Button>
  )
}

export type FilterCheckBox = BoxProps & {
  title: string
  code: string
  isChecked?: boolean
  onCheck?: Function
}

export type FilterCheckBoxProps = FilterCheckBox

const FilterCheckbox = ({
  title,
  code,
  isChecked = false,
  onCheck,
  ...props
}: FilterCheckBoxProps) => {
  const [checked, setChecked] = React.useState(isChecked)

  React.useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <Button
      background={checked ? 'green.400' : 'green.300'}
      _hover={{}}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onClick={() => onCheck && onCheck(checked, code)}
      position="relative"
      color="green.900"
      justifyContent="start"
      variant="link"
      borderRadius="5px"
      height={{ base: '38px', md: '60px' }}
      minW={{ base: 'auto', md: '250px' }}
      {...props}
      padding={{ base: '5px', md: '28px' }}
      overflow="hidden"
    >
      <Checkbox
        display={{ base: 'none', md: 'inherit' }}
        onClickCapture={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (onCheck) onCheck(checked, code)
        }}
        padding="0"
        iconColor="green.600"
        border="1px solid"
        borderColor="green.900"
        borderRadius="3px"
        colorScheme="white.100"
        isChecked={checked}
        zIndex="2"
        mr="5px"
      />
      <Text
        fontWeight="600"
        fontSize={{ base: '15px', md: '19px' }}
        color="green.900"
        zIndex="2"
      >
        {title}
      </Text>
    </Button>
  )
}

export type ValidFilterNames = 'bps' | 'ambients' | 'styles'

export type FilterPanelName = 'none' | ValidFilterNames

export type Filters = {
  nameSearched: string
  bps: Array<string>
  ambients: Array<string>
  styles: Array<string>
}

const initialFilters: Filters = {
  nameSearched: '',
  bps: [],
  ambients: [],
  styles: []
}

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

const FiltersAccordion = ({
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
                  {filtersCheckboxes['ambients'].map((filter) => (
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
                  {filtersCheckboxes['styles'].map((filter) => (
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
              onClick={() => {
                setFilters(JSON.parse(JSON.stringify(initialFilters)))
                setFilteredEnvs(applyFilters(initialFilters, envs))
              }}
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

const FiltersTabs = ({
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

export type EnvGalleryProps = {
  envs: Array<any>
  availableBps: Array<any>
}

export const EnvGallery = ({ envs, availableBps }: EnvGalleryProps) => {
  const [displayFilters, setDisplayFilters] = React.useState(false)
  const [currentFilterPanel, setCurrentFilterPanel] = React.useState('none')
  const [filteredEnvs, setFilteredEnvs] = React.useState(envs)
  const [filters, setFilters] = React.useState(
    JSON.parse(JSON.stringify(initialFilters))
  )
  const [filtersEmpty, setFiltersEmpty] = React.useState(true)
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
        return env.name
          .toLowerCase()
          .startsWith(filters['nameSearched'].toLowerCase())
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
        return filters['ambients'].includes(env.ambient)
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

  React.useEffect(() => {
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
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
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
              displayFilters={displayFilters}
              setDisplayFilters={setDisplayFilters}
              changeFilterPanel={changeFilterPanel}
              currentFilterPanel={currentFilterPanel}
              appendFilter={appendFilter}
              removeFilter={removeFilter}
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
          <Center>
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
                xl: '10px',
                '2xl': '30px'
              }}
              justifyItems="center"
            >
              {filteredEnvs &&
                filteredEnvs.map((env) => (
                  <GridItem key={env.id} mt="60px">
                    <Env
                      href={`/products/bp-berneck/gallery/${env.url_code}`}
                      type={env.type}
                      name={env.name}
                      image_url={env.image_url}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Center>
        </Container>
      </Container>
    </>
  )
}

const filtersCheckboxes = {
  ambients: [
    {
      title: 'Adega',
      code: 'adega'
    },
    {
      title: 'Área de serviço',
      code: 'area_servico'
    },
    {
      title: 'Banheiro',
      code: 'banheiro'
    },
    {
      title: 'Bar e restaurante',
      code: 'bar_resturante'
    },
    {
      title: 'Comercial',
      code: 'comercial'
    },
    {
      title: 'Corredor',
      code: 'corredor'
    },
    {
      title: 'Cozinha',
      code: 'cozinha'
    },
    {
      title: 'Garagem',
      code: 'garagem'
    },
    {
      title: 'Home',
      code: 'home'
    },
    {
      title: 'Infantil',
      code: 'infantil'
    }
  ],
  styles: [
    {
      title: 'Aconchegante',
      code: 'Aconchegante'
    },
    {
      title: 'Clássico',
      code: 'classico'
    },
    {
      title: 'Contemporâneo',
      code: 'contemporaneo'
    },
    {
      title: 'Escandinavo',
      code: 'escandinavo'
    },
    {
      title: 'Industrial',
      code: 'industrial'
    },
    {
      title: 'Lúdico',
      code: 'lúdico'
    },
    {
      title: 'Moderno',
      code: 'moderno'
    },
    {
      title: 'Natural',
      code: 'natural'
    },
    {
      title: 'Sóbrio',
      code: 'sobrio'
    },
    {
      title: 'Sofisticado',
      code: 'sofisticado'
    },
    {
      title: 'Urbano',
      code: 'urbano'
    }
  ]
}
