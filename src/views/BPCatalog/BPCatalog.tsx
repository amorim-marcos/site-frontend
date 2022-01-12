import { Container, Grid, Link, Text, Image} from "@chakra-ui/react"

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
            <Image src={pattern_image} />
            <Text fontSize="31px" variant={"body-bold" as any}>{name}</Text>
            <Text fontSize="28px">{product_texture}</Text>
        </Link>
    )
}

export const BPCatalog = ({ bps }:BPCatalogProps) => {
    return (
        <Container maxW="1920px" centerContent>
            <Container>

            </Container>
            <Container minW="100%" centerContent>
                <Grid
                    templateRows="repeat(auto, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gridGap="30px"
                >
                    {bps && bps.map((bp) => <BP name={bp.name} product_texture={bp.product_texture} pattern_image={bp.pattern_image} />)}
                </Grid>
            </Container>

        </Container>
    )
}