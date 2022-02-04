import React from 'react'
import { Container, Box, Grid, GridItem, Flex, Link, Text, Image, Button, Select, Input, Center, Checkbox, BoxProps, LinkProps} from "@chakra-ui/react"
import Pagebar from '@components/Pagebar'
import Arrow from "@components/Arrow"
import FiltersIcon from '@components/Icons/FiltersIcon'

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

export type ValidFilterNames = 'bps' | 'ambient' | 'style'

export type FilterPanelName = 'none' | ValidFilterNames

export type EnvGalleryProps = {
    envs: Array<any>
}

export const EnvGallery = ({ envs }:EnvGalleryProps) => {
    const [displayFilters, setDisplayFilters] = React.useState(false)
    const [currentFilterPanel, setCurrentFilterPanel] = React.useState('none')

    function changeFilterPanel(newFilterPanel:FilterPanelName){
        if(currentFilterPanel == newFilterPanel){
            setCurrentFilterPanel('none')
        }else{
            setCurrentFilterPanel(newFilterPanel)
        } 
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
        <Container backgroundColor="white.100" maxW="1920px" paddingInline="0" paddingTop="30px" paddingBottom="300px">
            <Container position="relative" mb={(displayFilters) ? "100px" : "15px"} minW="100%" minH="50px" paddingInline="0">
                <Button zIndex="10" onClick={() => setDisplayFilters(!displayFilters)} variant="link" backgroundColor="none"  position="absolute" top="0" left="30px">
                    <FiltersIcon mr="16px" />
                    <Text>Filtrar Resultados</Text>
                    <Arrow visibility={(displayFilters) ? "hidden" : "visible"} ml="10px" direction="right" width="3" height="6" color='grey.300' />
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
                                            onClick={() => changeFilterPanel('ambient')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'ambient') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color='grey.300' mr="10px">AMBIENTE</Text>
                                            <Arrow direction={(currentFilterPanel == 'ambient') ? "down" : "up"} width="3" height="6" color="grey.200" />
                                        </Button>  
                                        <Button 
                                            onClick={() => changeFilterPanel('style')}
                                            variant="link"
                                            color="grey.300"
                                            w="180px"
                                            h="30px"
                                            borderBottom={(currentFilterPanel == 'style') ? "solid" : "none"}
                                            borderBottomColor={"green.500"}
                                            borderBottomWidth={{ base: '4px' }}
                                            fontSize="22px"
                                        >
                                            <Text color='grey.300' mr="10px">ESTILO</Text>
                                            <Arrow direction={(currentFilterPanel == 'style') ? "down" : "up"} width="3" height="6" color="grey.200" />
                                        </Button>   
                                    </Flex>
                                </Center>
                                <Center position="relative" display={(currentFilterPanel == 'none') ? 'none' : 'normal'} flex={1} minH="100px">
                                    <Box display={(currentFilterPanel != 'bps') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                            BP Berneck® filtro
                                        </Flex>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'ambient') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                           Ambiente filtro
                                        </Flex>
                                    </Box>
                                    <Box display={(currentFilterPanel != 'style') ? 'none' : 'normal'} top="0" left="0" width="100%" height="100%">
                                        <Flex justifyContent="center">
                                            Estilo filtro
                                        </Flex>
                                    </Box>
                                </Center>
                            </Flex>
                        </Box>
                    </Box>
                }
            </Container>
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