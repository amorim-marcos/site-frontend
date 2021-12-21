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
                backgroundColor="grey.300"
                w="77px"
                h="77px"
            >
                <Arrow width="22" height="30" direction="left" color="grey.150"/>
            </Button>
            <Button
                onClick={nextTab}
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