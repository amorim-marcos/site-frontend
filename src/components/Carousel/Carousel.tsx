import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'

export type CarouselProps = {
  children?: React.ReactNode[]
}

export const Carousel = (props: CarouselProps) => {
  const [curr, setCurr] = useState(0)

  return (
    <Box>
      <h1>Carousel</h1>
      <Button onClick={() => setCurr(curr - 1)}>Previous</Button>
      <Button onClick={() => setCurr(curr + 1)}>Next</Button>
      {props.children?.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}
    </Box>
  )
}
