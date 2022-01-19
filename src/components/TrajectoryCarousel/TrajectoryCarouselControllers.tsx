import { Box, Flex, Text, Image, useMediaQuery, Button } from '@chakra-ui/react'
import Arrow from "@components/Arrow"
import { breakpoints } from 'theme/breakpoints'


export type TrajectoryCarouselControllersProps = {
    nextTab: Function
    previousTab: Function
}

export const TrajectoryCarouselControllers = ({nextTab, previousTab}:TrajectoryCarouselControllersProps) => {

    const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.lg})`)

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            mt={{
                base: "0",
                md: "-50px"
            }}
        >
            <Button
                onClick={previousTab}
                variant="no-border"
                background="grey.300"
                color="grey.150"
                w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px'}}
                h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px'}}
                _hover={{
                    background: "green.600",
                    color: "white.100",
                }}
            >
                {isMobile ? (
                    <Arrow 
                        width="5" 
                        height="5" 
                        direction="left"
                    />
                ):(
                    <Arrow 
                        width="22" 
                        height="30" 
                        direction="left"
                    />
                )}
            </Button>
            <Button
                onClick={nextTab}
                variant="no-border"
                background="grey.300"
                color="grey.150"
                w={{ base: '35px', sm: '50px', lg: '60px', xl: '77px'}}
                h={{ base: '35px', sm: '50px', lg: '60px', xl: '77px'}}
                _hover={{
                    background: "green.600",
                    color: "white.100",
                }}
            >
                {isMobile ? (
                    <Arrow 
                        width="5" 
                        height="5" 
                        direction="right"
                    />
                ):(
                    <Arrow 
                        width="22" 
                        height="30" 
                        direction="right"
                    />
                )}
            </Button>
        </Flex>
    )
}