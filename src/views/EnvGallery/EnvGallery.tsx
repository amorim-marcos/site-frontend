import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox, BoxProps, LinkProps} from "@chakra-ui/react"
import Pagebar from '@components/Pagebar'


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
            Galeria de ambientes
        </Container>
        </>

    )
}