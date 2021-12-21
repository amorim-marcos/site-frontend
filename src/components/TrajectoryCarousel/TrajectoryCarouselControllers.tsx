import { Button, Flex } from "@chakra-ui/react"
import Arrow from "@components/Arrow"

export type TrajectoryCarouselControllersProps = {
    nextTab: Function
    previousTab: Function
}

export const TrajectoryCarouselControllers = ({nextTab, previousTab}:TrajectoryCarouselControllersProps) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            mt="-50px"
        >
            <Button
                onClick={previousTab}
                variant="no-border"
                background="grey.300"
                color="grey.150"
                w="77px"
                h="77px"
                _hover={{
                    background: "green.600",
                    color: "white.100",
                }}
            >
                <Arrow width="22" height="30" direction="left" />
            </Button>
            <Button
                onClick={nextTab}
                variant="no-border"
                background="grey.300"
                color="grey.150"
                w="77px"
                h="77px"
                _hover={{
                    background: "green.600",
                    color: "white.100",
                }}
            >
                <Arrow width="22" height="30" direction="right"/>
            </Button>
        </Flex>
    )
}