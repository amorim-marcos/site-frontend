import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox} from "@chakra-ui/react"
import Arrow from "@components/Arrow"
import FiltersIcon from '@components/Icons/FiltersIcon'
import BigGridIcon from '@components/Icons/BigGridIcon'
import MidGridIcon from '@components/Icons/MidGridIcon'
import SmallGridIcon from '@components/Icons/SmallGridIcon'
import SearchIcon from '@components/SearchIcon'
import SunIcon from '@components/Icons/SunIcon'
import MoonIcon from '@components/Icons/MoonIcon'
import FiltersDarkModeIcon from '@components/Icons/FiltersDarkModeIcon'

import { colors } from 'theme/colors'

export type BP = {
    name: string,
    product_texture: string,
    pattern_image: string
}

export type FilterCheckBox = {
    title: string,
    code: string,
    background_image: string
}

export type FilterPanelName = 'none' | 'panels' | 'collections' | 'colorations'

export type GridSize = 'big' | 'medium' | 'small'

export type BPProps = BP

export type FilterCheckBoxProps = FilterCheckBox

export type BPCatalogProps = {
    bps: Array<BP>
}


const BP = ({name, product_texture, pattern_image, ...props}: BPProps) => {
    return (
        <Link {...props}>
            <Flex direction="column">
                <Image flex={1} src={pattern_image} />
                <Text flex={1} fontSize="31px" variant={"body-bold" as any}>{name}</Text>
                <Text flex={1} fontSize="28px">{product_texture}</Text>
            </Flex>
        </Link>
    )
}

const FilterCheckbox = ({title, code, background_image, ...props}: FilterCheckBoxProps) => {
    return (
        <Button position="relative" color="green.900" justifyContent="start" variant="link" borderRadius="5px" height="60px" minW="250px" {...props} padding="28px" overflow="hidden">
            <Checkbox zIndex="2" mr="5px"></Checkbox>
            <Text fontWeight="600" color="green.900" zIndex="2">{title}</Text>
            <Image position="absolute" top="0" right="0" zIndex="1" src={background_image} ></Image>
        </Button>
    )
}

const filtersCheckboxes = {
    "panels": [
        {
            title: "MDF",
            code: "mdf",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "MDP",
            code: "mdp",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "HDF Plus",
            code: "hdf_plus",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "MDF Plus",
            code: "mdf_plus",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "MDP Plus",
            code: "mdp_plus",
            background_image: "/bps/filters_masks/origens.png"
        }
    ],
    "collections": [
        {
            title: "Origens.",
            code: "origens",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "Nomade",
            code: "nomade",
            background_image: "/bps/filters_masks/origens.png"
        }
    ],
    "colorations": [
        {
            title: "Madeiras Claras",
            code: "madeiras_claras",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "Madeiras médias",
            code: "madeiras_medias",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "Madeiras Escuras",
            code: "madeiras_escuras",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "Tecidos, pedras, e outros",
            code: "outros",
            background_image: "/bps/filters_masks/origens.png"
        },
        {
            title: "Combine Fácil",
            code: "combine_facil",
            background_image: "/bps/filters_masks/origens.png"
        }
    ]
}

export const BPCatalog = ({ bps }:BPCatalogProps) => {
    const [displayFilters, setDisplayFilters] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(false)
    const [gridSize, setGridSize] = React.useState('big')
    const [gridColumnsMode, setGridColumnsMode] = React.useState('repeat(3, 1fr)')
    const [searchSelected, setSearchSelected] = React.useState(false)
    const [currentFilterPanel, setCurrentFilterPanel] = React.useState('none')

    function changeGridSize(newGridSize:GridSize){
        setGridSize(newGridSize)
    }

    function changeFilterPanel(newFilterPanel:FilterPanelName){
        if(currentFilterPanel == newFilterPanel){
            setCurrentFilterPanel('none')
        }else{
            setCurrentFilterPanel(newFilterPanel)
        } 
    }

    React.useEffect(() => {
        switch(gridSize){
            case 'big':
                setGridColumnsMode('repeat(3, 1fr)')
                break
            case 'medium':
                setGridColumnsMode('repeat(5, 1fr)')
                break
            case 'small':
                setGridColumnsMode('repeat(7, 1fr)')
                break
        }
    }, [gridSize])

    return (
        <Container backgroundColor={(darkMode) ? "grey.400" : "white.100"} maxW="1920px" paddingInline="0" paddingTop="30px" paddingBottom="300px">
            <Container position="relative" mb={(displayFilters) ? "100px" : "15px"} minW="100%" minH="50px" paddingInline="0">
                <Button zIndex="10" onClick={() => setDisplayFilters(!displayFilters)} variant="link" backgroundColor="none"  position="absolute" top="0" left="30px">
                    <FiltersIcon mr="16px" />
                    <Text color={(darkMode) ? 'green.300' : 'grey.300'}>Filtrar Resultados</Text>
                    <Arrow visibility={(displayFilters) ? "hidden" : "visible"} ml="10px" direction="right" width="3" height="6" color={(darkMode) ? 'green.300' : 'grey.300'}/>
                </Button>
                {
                    displayFilters &&
                    <Box margin="0">
                        <Box >
                            <Flex position="relative" direction="column">
                                <Center>
                                    <Box position="absolute" background="green.600" width="650px" height="6px" bottom="-3px"/>
                                </Center>
                                <Center mb="20px">
                                    <Flex justifyContent="space-between">
                                        <Button 
                                            onClick={() => changeFilterPanel('panels')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'panels') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color={(darkMode) ? 'green.300' : 'grey.300'}>PAINÉIS</Text>
                                        </Button> 
                                        <Button 
                                            onClick={() => changeFilterPanel('collections')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'collections') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color={(darkMode) ? 'green.300' : 'grey.300'}>COLEÇÕES</Text>
                                        </Button>  
                                        <Button 
                                            onClick={() => changeFilterPanel('colorations')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'colorations') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color={(darkMode) ? 'green.300' : 'grey.300'}>COLORAÇÃO</Text>
                                        </Button>   
                                    </Flex>
                                </Center>
                                <Center position="relative" display={(currentFilterPanel == 'none') ? 'none' : 'normal'} flex={1} minH="100px">
                                    <Box display={(currentFilterPanel != 'panels') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                            {
                                                filtersCheckboxes["panels"].map((filter) => <FilterCheckbox title={filter.title} code={filter.code} background_image={filter.background_image} mr="30px" key={"panels"+filter.code}/>)
                                            }
                                        </Flex>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'collections') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                            {
                                                filtersCheckboxes["collections"].map((filter) => <FilterCheckbox title={filter.title} code={filter.code} background_image={filter.background_image} mr="30px" />)
                                            }
                                        </Flex>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'colorations') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                            {
                                                filtersCheckboxes["colorations"].map((filter) => <FilterCheckbox title={filter.title} code={filter.code} background_image={filter.background_image} mr="30px" />)
                                            }
                                        </Flex>
                                    </Box>
                                </Center>
                            </Flex>
                        </Box>
                        <Box display="inline-block" minW="100%" height="100px" background={(darkMode) ? 'grey.350' : 'grey.100'} paddingLeft="20%">
                            <Select mr="30px" color={(darkMode) ? 'green.300' : 'grey.300'} position="relative" top="30px" display="inline-block" border="0" backgroundColor={(darkMode) ? "grey.400" : "white.100"} width="160px" fontSize="16px">
                                    <option value='launch'>lançamento</option>
                                    <option value='name'>nome</option>
                                    <option value='scale'>escala de cor</option>
                            </Select>  

                            <Box position="relative" top="30px" display="inline-block" mr="30px">
                                <Flex justifyContent="center" alignItems="center">
                                    <Text color={(darkMode) ? 'green.300' : 'grey.300'} display="inline-block" fontSize="16px" mr="15px">Formato de exibição</Text>
                                            
                                    <Button onClick={() => changeGridSize('big')}variant="link" display="inline-block" mr="15px" ><BigGridIcon color={(gridSize == 'big')? "green.500" : "grey.200"} /></Button>

                                    <Button onClick={() => changeGridSize('medium')} variant="link" display="inline-block" mr="15px"><MidGridIcon color={(gridSize == 'medium')? "green.500" : "grey.200"} /></Button>

                                    <Button onClick={() => changeGridSize('small')} variant="link" display="inline-block" mr="15px"><SmallGridIcon color={(gridSize == 'small')? "green.500" : "grey.200"} /></Button>
                                </Flex>
                            </Box>

                            
                            <Box position="relative" top="30px" display="inline-block" mr="30px">
                                <Box position="relative"  display="inline-block">
                                    <Flex
                                        width={{
                                            base: '100px',
                                            md: '200px',
                                            lg: '250px',
                                            xl: '300px',
                                            '2xl': '350px'
                                        }}
                                        borderBottom="solid"
                                        borderBottomColor={(searchSelected) ? "green.500" : ( (darkMode) ? 'green.300' : "grey.300" )}
                                        paddingX="5px"
                                        height={{ base: '25px' }}
                                        borderBottomWidth={{ base: '2px' }}
                                    >
                                        <Input
                                            onFocus={()=>{ setSearchSelected(true) }}
                                            onBlur={()=>{ setSearchSelected(false) }}
                                            placeholder="Pesquise pelo nome"
                                            _placeholder={{color: (darkMode) ? 'green.300' : "grey.300"}}
                                            border="none"
                                            outline="none"
                                            _active={{ border: 'none', outline: 'none' }}
                                            focusBorderColor="none"
                                            color={(darkMode) ? 'green.300' : 'grey.300'}
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
                                        />
                                        <Box>
                                        <SearchIcon
                                            stroke={(searchSelected)? colors.green[500] : ( (darkMode) ? colors.green[300] : colors.grey[300])}
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

                            <Box position="relative" top="30px" display="inline-block">

                                <Flex justifyContent="center" alignItems="center">
                                        <Text color={(darkMode) ? 'green.300' : 'grey.300'} display="inline-block" fontSize="16px" mr="15px">Cor do fundo</Text>
                                        
                                        <Box position="relative"  display="inline-block" mr="15px">
                                            <SunIcon color={(darkMode) ? 'green.300' : 'grey.300'} />
                                        </Box>
        
                                        <Button onClick={() => setDarkMode(!darkMode)} variant="link" display="inline-block" mr="15px"><FiltersDarkModeIcon activated={darkMode}/></Button>
        
                                        <Box position="relative"  display="inline-block">
                                            <MoonIcon color={(darkMode) ? 'green.300' : 'grey.300'} />
                                        </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                }
                <Text position="absolute" color={(darkMode) ? 'green.300' : 'grey.300'} top="0" right="0">{bps.length} Produtos Encontrados</Text>
            </Container>
            <Container minW="100%">
                <Grid
                    templateRows="repeat(auto, 1fr)"
                    templateColumns={gridColumnsMode}
                    gridGap="30px"
                >
                    {
                        bps && bps.map((bp) => (
                            <GridItem>
                                <BP color={(darkMode) ? 'white.100' : 'grey.400'} name={bp.name} product_texture={bp.product_texture} pattern_image={bp.pattern_image} />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>

        </Container>
    )
}