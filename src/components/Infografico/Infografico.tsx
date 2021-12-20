import { Container, Flex } from "@chakra-ui/react"


export type InfograficoProps = {
  title?: string
}
export const Infografico = ({ title }: InfograficoProps) => {
  return (
    <Flex>
      <h1>Infografico</h1>
      <h2>{title}</h2>
    
    </Flex>
  )
}
