import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button} from "@chakra-ui/react"
import Arrow from "@components/Arrow"

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
        <Container maxW="1920px" centerContent>
            <Container minW="100%">
                <Flex mt="30px" mb="15px">
                    <Button onClick={() => setDisplayFilters(!displayFilters)} variant="link" backgroundColor="none" left="0">
                        <Text>Filtrar Resultados</Text>
                        <Arrow visibility={(displayFilters) ? "hidden" : "visible"} ml="10px" direction="right" width="3" height="6" color="grey.100"/>
                    </Button>

                    {
                        displayFilters &&
                        <Box alignSelf="center">
                            Filters
                        </Box>
                    }

                    <Text color="grey.300" marginLeft="auto">{bps.length} Produtos Encontrados</Text>
                </Flex>
            </Container>
            <Container minW="100%">
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