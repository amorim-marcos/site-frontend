import { Button, Flex } from "@chakra-ui/react"
import Arrow from "@components/Arrow"

export const TrajectoryCarouselControllers = () => {
    return (
        <Flex>
            <Button
                variant="no-border"
                backgroundColor="grey.300"
                w="77px"
                h="77px"
            >
                <Arrow width="22" height="30" direction="left" color="grey.150"/>
            </Button>
            <Button
                variant="no-border"
                backgroundColor="grey.300"
                w="77px"
                h="77px"
            >
                <Arrow width="22" height="30" direction="right" color="grey.150"/>
            </Button>
        </Flex>
    )
}