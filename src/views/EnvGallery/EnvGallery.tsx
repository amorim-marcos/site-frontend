import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox, BoxProps, LinkProps} from "@chakra-ui/react"
import Pagebar from '@components/Pagebar'

export type EnvProps = LinkProps & {
    type: string,
    name: string,
    image_url: string
}

const Env = ({type, name, image_url, ...props}:EnvProps) => {
    return(
        <Link {...props}>
            <Flex direction="column">
                <Box overflow="hidden" width="548px" height="409px">
                    <Image objectFit="cover" objectPosition="center" width="100%" height="100%" overflow="hidden" flex={1} src={image_url} />
                </Box>
                <Text flex={1} fontSize="31px" variant={"body-bold" as any}>{type}</Text>
                <Text flex={1} fontSize="28px">{name}</Text>
            </Flex>
        </Link>
    )

}

export type EnvGalleryProps = {
    envs: Array<any>
}

export const EnvGallery = ({ envs }:EnvGalleryProps) => {
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
        <Container backgroundColor={"white.100"} maxW="1920px" paddingInline="0" paddingTop="30px" paddingBottom="300px">
            <Container minW="100%">
                <Grid
                    templateRows="repeat(auto, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gridGap="30px"
                >
                    {
                        envs && envs.map((env) => (
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