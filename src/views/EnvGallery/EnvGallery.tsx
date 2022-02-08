import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox, BoxProps, LinkProps, ButtonProps} from "@chakra-ui/react"
import Pagebar from '@components/Pagebar'
import Arrow from "@components/Arrow"
import FiltersIcon from '@components/Icons/FiltersIcon'
import SearchIcon from '@components/Icons/SearchIcon'
import { colors } from 'theme/colors'
import CloseIcon from '@components/Icons/CloseIcon'

export type EnvProps = LinkProps & {
    type: string,
    name: string,
    image_url: string
}

const Env = ({type, name, image_url, ...props}:EnvProps) => {
    return(
        <Link {...props}>
            <Flex direction="column">
                <Box overflow="hidden" width={{base: "367px", md: "548px"}} height={{ base: "274px", md: "409px"}}>
                    <Image objectFit="cover" objectPosition="center" width="100%" height="100%" overflow="hidden" flex={1} src={image_url} />
                </Box>
                <Text flex={1} fontSize={{base: "23px", md: "31px"}} variant={"body-bold" as any}>{type}</Text>
                <Text flex={1} fontSize={{base: "17px", md: "28px"}}>{name}</Text>
            </Flex>
        </Link>
    )

}

type BPFilterProps = ButtonProps & {
    name: string,
    texture: string,
    pattern_image: string
    isSelected?: boolean
    toggleSelect?: Function
}

const BPFilter = ({name, texture, pattern_image, isSelected = false, toggleSelect, ...props}: BPFilterProps) => {
    const [displayInfo, setDisplayInfo] = React.useState(false)
    const [selected, setSelected] = React.useState(false)
    
    React.useEffect(() => {
        setSelected(isSelected)
    }, [isSelected])

    return (
        <Button 
            zIndex="5"
            onClick={(e) => { if(toggleSelect) toggleSelect(selected)}}
            onMouseEnter={() => setDisplayInfo(true) }
            onMouseLeave={() => setDisplayInfo(false)}
            minW="155px" 
            height="55px" 
            {...props}
        >
            <Box boxShadow={(selected) ? "0px 0px 3px green" : "none"} position="absolute" top="0" left="0" zIndex="1" width="100%" height="100%" borderRadius="5px" padding="0" margin="0" backgroundImage={`url(${pattern_image})`} backgroundRepeat="repeat" backgroundSize="cover"></Box>
            <Box  display={(!displayInfo) ? 'none' : 'normal'} zIndex="2" width="100%" height="100%" position="absolute" top="0" left="0" backgroundColor="white.100" opacity="0.6"></Box>
            <Box display={(!displayInfo) ? 'none' : 'normal'} zIndex="3" width="100%" height="100%" position="absolute" top="0" left="0">
                <Flex direction="column" alignItems="flex-start" mt="5px" ml="5px" color="grey.400">
                    <Text variant={"body-bold" as any}>{name}</Text>
                    <Text color="grey.600">{texture}</Text>
                </Flex>
            </Box>
        </Button>
    )
}

export type FilterCheckBox = BoxProps &{
    title: string,
    code: string,
    isChecked?: boolean
    onCheck?: Function
}

export type FilterCheckBoxProps = FilterCheckBox

const FilterCheckbox = ({title, code, isChecked = false, onCheck = () => {}, ...props}: FilterCheckBoxProps) => {
    const [checked, setChecked] = React.useState(isChecked)
    const [value, setValue] = React.useState(code)

    React.useEffect(() => {
        setChecked(isChecked)
    }, [isChecked])

    return (
        // @ts-ignore
        <Button background="green.150" onClick={(e) => { if(onCheck) onCheck(checked, value)}} position="relative" color="green.900" justifyContent="start" variant="link" borderRadius="5px" height="60px" minW="250px" {...props} padding="28px" overflow="hidden">
            <Checkbox 
                onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); if(onCheck) onCheck(checked, value)}} 
                padding="0"
                iconColor='green.600'
                border="1px solid"
                borderColor="green.900"
                borderRadius="3px"
                colorScheme="white.100"
                isChecked={checked}
                zIndex="2" 
                mr="5px" 
            />
            <Text fontWeight="600" fontSize="19px" color="green.900" zIndex="2">{title}</Text>
        </Button>
    )
}

export type ValidFilterNames = 'bps' | 'ambients' | 'styles'

export type FilterPanelName = 'none' | ValidFilterNames


export type Filters = {
    "nameSearched": string,
    "bps": Array<string>,
    "ambients": Array<string>,
    "styles": Array<string>    
}

const initialFilters:Filters = {
    "nameSearched": "",
    "bps": [],
    "ambients": [],
    "styles": []
}

export type EnvGalleryProps = {
    envs: Array<any>,
    availableBps: Array<any>
}

export const EnvGallery = ({ envs, availableBps }:EnvGalleryProps) => {
    const [displayFilters, setDisplayFilters] = React.useState(false)
    const [currentFilterPanel, setCurrentFilterPanel] = React.useState('none')
    const [searchSelected, setSearchSelected] = React.useState(false)
    const [filteredEnvs, setFilteredEnvs] = React.useState(envs)
    const [filters, setFilters] = React.useState(initialFilters)

    function changeFilterPanel(newFilterPanel:FilterPanelName){
        if(currentFilterPanel == newFilterPanel){
            setCurrentFilterPanel('none')
        }else{
            setCurrentFilterPanel(newFilterPanel)
        } 
    }

    function appendFilter(type:ValidFilterNames, value:string){
        let filtersArray = filters[type]

        filtersArray.push(value)

        let newFilters:Filters = {...filters}

        newFilters[type] = filtersArray

        setFilters(newFilters)
    }

    function removeFilter(type:ValidFilterNames, value:string){
        let filtersArray = filters[type]

        let index = filtersArray.indexOf(value)

        if (index > -1) {
            filtersArray.splice(index, 1);
        }

        let newFilters = { ...filters }

        newFilters[type] = filtersArray

        setFilters(newFilters)
    }

    function applyFilters(filters:any, originalEnvs:Array<any>){
        let filteredEnvs = originalEnvs
        
        // search
        if(filters["nameSearched"] && filters["nameSearched"] !== ""){
            filteredEnvs = filteredEnvs.filter((env:any) => {
                return env.name.toLowerCase().startsWith(filters["nameSearched"].toLowerCase())
            })
        }

        // bps
        if(filters["bps"].length > 0){
            filteredEnvs = filteredEnvs.filter((env:any) => {
                if(env.bps && env.bps.length > 0){
                    for(let bp of env.bps){
                        if(filters["bps"].includes(bp)){
                            return true
                        }
                    }
                    return false
                }
                return false
            })             
        }

        // ambients
        if(filters["ambients"].length > 0){
            filteredEnvs = filteredEnvs.filter((env:any) => {
                return filters["ambients"].includes(env.ambient)
            })            
        }

        // styles
        if(filters["styles"].length > 0){
            filteredEnvs = filteredEnvs.filter((env:any) => {
                return filters["styles"].includes(env.style)
            })            
        }

        return filteredEnvs.slice()
    }

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
        <Container backgroundColor="white.100" maxW="1920px" width="100%" paddingInline="0" paddingTop="30px" paddingBottom="300px">
            <Container position="relative" mb={(displayFilters) ? { base: "40px", md: "100px"} : { base: "5px", md: "15px"}} minW="100%" minH={{ base: "0" , md: "50px"}} paddingInline="0">
                <Box position={{base: "relative", md: "absolute"}} top="0" left={{base: "20px", md: "30px"}}>
                    <Button zIndex="10" onClick={() => setDisplayFilters(!displayFilters)} variant="link" backgroundColor="none"  >
                        {(displayFilters) ? <CloseIcon mr="16px" w="22px" h="22px" color="#8BB879" />: <FiltersIcon mr="16px" />}
                        <Text fontSize="17px">{ (!displayFilters) ? "Filtrar Resultados" : "Esconder filtros" }</Text>
                        <Arrow display={{base: "none", md: "normal"}} visibility={(displayFilters) ? "hidden" : "visible"} ml="10px" direction="right" width="3" height="6" color='grey.300' />
                    </Button>
                </Box>
                {
                    displayFilters &&
                    <Box margin="0">
                        <Box>
                            <Flex position="relative" direction="column">
                                <Center display={{base: "none", md: "normal"}}>
                                    <Box position="absolute" background="green.600" width="650px" height="6px" bottom="-3px"/>
                                </Center>
                                <Center mb="20px">
                                    <Flex justifyContent="space-between">
                                        <Button 
                                            onClick={() => changeFilterPanel('bps')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'bps') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color='grey.300' mr="10px">BP BERNECK®</Text>
                                            <Arrow direction={(currentFilterPanel == 'bps') ? "down" : "up"} width="3" height="6" color="grey.200" />
                                        </Button> 
                                        <Button 
                                            onClick={() => changeFilterPanel('ambients')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'ambients') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color='grey.300' mr="10px">AMBIENTE</Text>
                                            <Arrow direction={(currentFilterPanel == 'ambients') ? "down" : "up"} width="3" height="6" color="grey.200" />
                                        </Button>  
                                        <Button 
                                            onClick={() => changeFilterPanel('styles')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'styles') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color='grey.300' mr="10px">ESTILO</Text>
                                            <Arrow direction={(currentFilterPanel == 'styles') ? "down" : "up"} width="3" height="6" color="grey.200" />
                                        </Button>   
                                    </Flex>
                                </Center>
                                <Center position="relative" display={(currentFilterPanel == 'none') ? 'none' : 'normal'} flex={1} minH="100px">
                                    <Box display={(currentFilterPanel != 'bps') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center" wrap="wrap">
                                            {availableBps && availableBps.map((bp) => 
                                                <BPFilter 
                                                    isSelected={filters["bps"].includes(bp.name)}
                                                    toggleSelect={(selected:boolean) => { (!selected) ? appendFilter("bps", bp.name) : removeFilter("bps", bp.name)}} 
                                                    mr="15px" mt="10px" 
                                                    name={bp.name} texture={bp.product_texture} pattern_image={bp.pattern_image} 
                                                /> 
                                            )}
                                        </Flex>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'ambients') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Center>
                                            <Flex justifyContent="flex-start" wrap="wrap">
                                                {
                                                    filtersCheckboxes["ambients"].map((filter) => 
                                                    <FilterCheckbox 
                                                        isChecked={filters["ambients"].includes(filter.code)}
                                                        onCheck={(isChecked:boolean, value:any) => { (!isChecked) ? appendFilter("ambients", value) : removeFilter("ambients", value) }}
                                                        title={filter.title} code={filter.code} 
                                                        mr="15px" mt="10px" 
                                                    />)
                                                }
                                            </Flex>
                                        </Center>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'styles') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Center>
                                            <Flex justifyContent="flex-start" wrap="wrap">
                                                {
                                                    filtersCheckboxes["styles"].map((filter) => 
                                                        <FilterCheckbox 
                                                            isChecked={filters["styles"].includes(filter.code)}
                                                            onCheck={(isChecked:boolean, value:any) => { (!isChecked) ? appendFilter("styles", value) : removeFilter("styles", value) }}
                                                            title={filter.title} code={filter.code} 
                                                            mr="15px" mt="10px" 
                                                        />)
                                                }
                                            </Flex>
                                        </Center>
                                    </Box>
                                    <Flex justifyContent="center" padding="30px">
                                        <Button variant={"filters" as any} mr="30px" onClick={() =>setFilteredEnvs(applyFilters(filters, envs))}>Filtrar</Button>
                                        <Button variant={"filters" as any} onClick={() => { setFilters(initialFilters); setFilteredEnvs(applyFilters(initialFilters, envs)) }}>Limpar filtros</Button>
                                    </Flex>
                                </Center>
                                <Box display={{base: "none", md: "normal"}} position="absolute" top="0" right="50px">
                                    <Flex
                                        width={{
                                            base: '100px',
                                            md: '200px',
                                            lg: '250px',
                                            xl: '300px',
                                            '2xl': '350px'
                                        }}
                                        borderBottom="solid"
                                        borderBottomColor={(searchSelected) ? "green.500" : "grey.300"}
                                        paddingX="5px"
                                        height={{ base: '25px' }}
                                        borderBottomWidth={{ base: '2px' }}
                                    >
                                        <Input
                                            onFocus={()=>{ setSearchSelected(true) }}
                                            onBlur={()=>{ setSearchSelected(false) }}
                                            placeholder="Pesquise pelo nome"
                                            _placeholder={{ color: "grey.300"}}
                                            border="none"
                                            outline="none"
                                            _active={{ border: 'none', outline: 'none' }}
                                            focusBorderColor="none"
                                            color='grey.300'
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
                                            onChange={(e) => { setFilters({ ...filters, nameSearched: e.target.value })}}
                                        />
                                        <Box>
                                        <SearchIcon
                                            stroke={(searchSelected)? colors.green[500] : colors.grey[300]}
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
                }
            </Container>
            <Container minW="100%">
                <Grid
                    templateRows="repeat(auto, 1fr)"
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"} }
                    gridGap={{base: "none", md: "30px"}}
                >
                    {
                        filteredEnvs && filteredEnvs.map((env) => (
                            <GridItem mt="60px">
                                <Env type={env.type} name={env.name} image_url={env.image_url} />      
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>
        </Container>
        </>

    )
}

const filtersCheckboxes = {
    "ambients": [
        {
            title: "Adega",
            code: "adega"
        },
        {
            title: "Área de serviço",
            code: "area_servico"
        },
        {
            title: "Banheiro",
            code: "banheiro"
        },
        {
            title: "Bar e restaurante",
            code: "bar_resturante"
        },
        {
            title: "Comercial",
            code: "comercial"
        },
        {
            title: "Corredor",
            code: "corredor"
        },
        {
            title: "Cozinha",
            code: "cozinha"
        },
        {
            title: "Garagem",
            code: "garagem"
        },
        {
            title: "Home",
            code: "home"
        },
        {
            title: "Infantil",
            code: "infantil"
        }
    ],
    "styles": [
        {
            title: "Aconchegante",
            code: "Aconchegante"
        },
        {
            title: "Clássico",
            code: "classico"
        },
        {
            title: "Contemporâneo",
            code: "contemporaneo"
        },
        {
            title: "Escandinavo",
            code: "escandinavo"
        },
        {
            title: "Industrial",
            code: "industrial"
        },
        {
            title: "Lúdico",
            code: "lúdico"
        },
        {
            title: "Moderno",
            code: "moderno"
        },
        {
            title: "Natural",
            code: "natural"
        },
        {
            title: "Sóbrio",
            code: "sobrio"
        },
        {
            title: "Sofisticado",
            code: "sofisticado"
        },
        {
            title: "Urbano",
            code: "urbano"
        }
    ]
}