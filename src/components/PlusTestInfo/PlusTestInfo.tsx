import { Flex, Box, Text } from '@chakra-ui/react'
import PlusInfoTable from '@components/PlusInfoTable'
import { PlusInfoTableProps } from '@components/PlusInfoTable/PlusInfoTable'

import ArrowIcon from '../Icons/ArrowIcon'
export type PlusTestInfoProps = {
  title?: string
  description?: string
  testSteps?: {
    first: string
    second: string
    third: string
  }
  extraInfoTitle?: string
  extraInfoBody?: Array<string>
  tableInfo?: PlusInfoTableProps
}
export const PlusTestInfo = ({
  title,
  description,
  testSteps,
  extraInfoTitle,
  extraInfoBody,
  tableInfo
}: PlusTestInfoProps) => {
  return (
    <Box bg="#E8E8E8" maxWidth="1920px" marginX="auto" padding="5%">
      <Text variant={'productTitle' as any}>{title}</Text>
      <Text variant={'productBody' as any} width={{ base: '100%', sm: '44%' }}>
        {description}
      </Text>
      <Flex
        paddingY={{
          base: '20px',
          sm: '10px',
          md: '20px',
          lg: '30px',
          xl: '40px',
          '2xl': '50px'
        }}
        justifyContent="space-evenly"
        alignItems="center"
        position="relative"
        marginTop="30px"
        backgroundImage={{
          base: "url('/img/fundo_caminho90deg.png')",
          sm: "url('/img/fundo_caminho.png')"
        }}
        backgroundRepeat="no-repeat"
        backgroundSize={{ base: '100%' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>1</Text>
          <Text variant={'productBody' as any}>
            {testSteps && testSteps.first}
          </Text>
        </Flex>
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>2</Text>
          <Text variant={'productBody' as any}>
            {testSteps && testSteps.second}
          </Text>
        </Flex>
        <Flex
          marginY={{ base: '40px', sm: '0' }}
          w={{ base: '80%', sm: '30%' }}
          zIndex="docked"
        >
          <Text variant={'berneckPlusTestInfoNumber' as any}>3</Text>
          <Text variant={'productBody' as any}>
            {testSteps && testSteps.third}
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Box width={{ base: '90%', sm: '40%' }}>
          <Text marginTop="40px" variant={'productTitle' as any}>
            {extraInfoTitle}
          </Text>

          <Box>
            {extraInfoBody &&
              extraInfoBody.map((e) => <ItemCite key={e} text={e} />)}
          </Box>
        </Box>
        <Box>{tableInfo && <PlusInfoTable rows={tableInfo.rows} />}</Box>
      </Flex>
    </Box>
  )
}

const ItemCite = ({ text = '' }) => {
  return (
    <Flex marginBottom="5px">
      <Box
        margin={{
          base: '3px',
          sm: '3px',
          md: '4px',
          lg: '6px',
          xl: '8px',
          '2xl': '10px'
        }}
      >
        <ArrowIcon
          width={{
            base: '10px',
            sm: '3px',
            md: '4px',
            lg: '6px',
            xl: '8px',
            '2xl': '10px'
          }}
          stroke="green.600"
        />
      </Box>
      <Text variant={'productBody' as any}>{text}</Text>
    </Flex>
  )
}
