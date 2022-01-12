import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input} from "@chakra-ui/react"
import Arrow from "@components/Arrow"
import FiltersIcon from '@components/Icons/FiltersIcon'
import BigGridIcon from '@components/Icons/BigGridIcon'
import MidGridIcon from '@components/Icons/MidGridIcon'
import SmallGridIcon from '@components/Icons/SmallGridIcon'
import SearchIcon from '@components/SearchIcon'
import SunIcon from '@components/Icons/SunIcon'
import MoonIcon from '@components/Icons/MoonIcon'
import FiltersDarkModeIcon from '@components/Icons/FiltersDarkModeIcon'

export type BP = {
    name: string,
    product_texture: string,
    pattern_image: string
}

export type BPProps = BP

export type BPCatalogProps = {
    bps: Array<BP>
}

const BP = ({name, product_texture, pattern_image}:BPProps) => {
    return (
        <Link>
            <Flex direction="column">
                <Image flex={1} src={pattern_image} />
                <Text flex={1} fontSize="31px" variant={"body-bold" as any}>{name}</Text>
                <Text flex={1} fontSize="28px">{product_texture}</Text>
            </Flex>
        </Link>
    )
}

export const BPCatalog = ({ bps }:BPCatalogProps) => {
    const [displayFilters, setDisplayFilters] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(false)

    return (
        <Container maxW="1920px" paddingInline="0">
            <Container position="relative" mt="30px" mb={(displayFilters) ? "100px" : "15px"} minW="100%" minH="50px" paddingInline="0">
                <Button onClick={() => setDisplayFilters(!displayFilters)} variant="link" backgroundColor="none"  position="absolute" top="0" left="30px">
                    <FiltersIcon mr="16px" />
                    <Text>Filtrar Resultados</Text>
                    <Arrow visibility={(displayFilters) ? "hidden" : "visible"} ml="10px" direction="right" width="3" height="6" color="grey.100"/>
                </Button>
                {
                    displayFilters &&
                    <Box margin="0">
                        <Box>
                            Filters 1
                        </Box>
                        <Box display="inline-block" minW="100%" height="100px" background="grey.100">
                            <Select position="relative" top="25%" display="inline-block" background="white.100" width="160px" fontSize="16px">
                                    <option value='launch'>lançamento</option>
                                    <option value='name'>nome</option>
                                    <option value='scale'>escala de cor</option>
                            </Select>  

                            <Box position="relative" top="25%" display="inline-block">
                                <Text display="inline-block" fontSize="16px" mr="15px">Formato de exibição</Text>
                                        
                                <Button variant="link" display="inline-block" mr="15px" ><BigGridIcon color="grey.200" /></Button>

                                <Button variant="link" display="inline-block" mr="15px"><MidGridIcon color="grey.200" /></Button>

                                <Button variant="link" display="inline-block" mr="15px"><SmallGridIcon color="grey.200" /></Button>
                            </Box>

                            <Box position="relative" top="25%" display="inline-block">
                                <Box position="relative"  display="inline-block">
                                    <Input background="white.100" />
                                </Box>
                                <Box position="relative"  display="inline-block">
                                    <SearchIcon />
                                </Box>
                            </Box>

                            <Box position="relative" top="25%" display="inline-block">
                                <Text display="inline-block" fontSize="16px" mr="15px">Cor do fundo</Text>
                                        
                                <Box position="relative"  display="inline-block">
                                    <SunIcon color="grey.300" />
                                </Box>

                                <Button onClick={() => setDarkMode(!darkMode)} variant="link" display="inline-block" mr="15px"><FiltersDarkModeIcon activated={darkMode}/></Button>

                                <Box position="relative"  display="inline-block">
                                    <MoonIcon color="grey.300" />
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                }
                <Text position="absolute" color="grey.300" top="0" right="0">{bps.length} Produtos Encontrados</Text>
            </Container>
            <Container  minW="100%">
                <Grid
                    templateRows="repeat(auto, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gridGap="30px"
                >
                    {
                        bps && bps.map((bp) => (
                            <GridItem>
                                <BP name={bp.name} product_texture={bp.product_texture} pattern_image={bp.pattern_image} />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>

        </Container>
    )
}