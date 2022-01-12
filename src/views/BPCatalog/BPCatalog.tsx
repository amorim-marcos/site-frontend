import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button} from "@chakra-ui/react"
import Arrow from "@components/Arrow"
import FiltersIcon from '@components/Icons/FiltersIcon'

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
                    <Flex direction="column">
                        <Box flex={1} alignSelf="center">
                            Filters 1
                        </Box>
                        <Box flex={1} minW="100%" minH="50px" background="grey.100">
                            Filters 2
                        </Box>
                    </Flex>
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