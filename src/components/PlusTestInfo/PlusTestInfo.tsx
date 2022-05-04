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
    <Box bg="#E8E8E8">
      <Box
        aria-label="plusTestinfoContainer"
        bg="#E8E8E8"
        maxWidth="1536px"
        marginX="auto"
        padding={{ base: '5%', '2xl': '3%' }}
      >
        <Text
          as={'h3'}
          variant={'h3'}
          color="green.900"
          fontWeight={'extrabold'}
        >
          {title}
        </Text>
        <Text width={{ base: '100%', md: '44%' }}>{description}</Text>

        <Flex
          padding={{
            base: '2% 0 4% 0',
            md: '2% 0 2% 0',
            lg: '2% 0 2% 0',
            xl: '2% 0 5% 0',
            '2xl': '2% 0 2% 0'
          }}
          margin={{
            base: '2% 0 4% 0',
            md: '2% 0 2% 0',
            lg: '2% 0 2% 0',
            xl: '2% 0 2% 0',
            '2xl': '2% 0 5% 0'
          }}
          justifyContent="space-evenly"
          // alignItems="flex-start"
          position="relative"
          backgroundImage={{
            base: "url('/img/fundo_caminho90deg.png')",
            md: "url('/img/fundo_caminho.png')"
          }}
          backgroundRepeat="no-repeat"
          backgroundSize={{ base: '120%' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {/* LINHA 1 */}
          <Flex
            marginY={{ base: '3%', md: '0' }}
            w={{ base: '80%', md: '30%' }}
            zIndex="docked"
            alignItems="flex-start"
            flexDirection={'row'}
          >
            <Flex
              // bg="black"
              alignItems="flex-start"
              padding={{ base: '5%', sm: '5%', md: '2%', '2xl': '4%' }}
              mt={{ base: '-5%', sm: '-4%', md: '-3%', '2xl': '-4%' }}
            >
              <Text variant={'berneckPlusTestInfoNumber' as any}>1</Text>
            </Flex>
            <Flex
              // bg="white"
              padding={'2%'}
            >
              <Text>{testSteps && testSteps.first}</Text>
            </Flex>
          </Flex>

          {/* LINHA 2 */}
          <Flex
            marginY={{ base: '3%', md: '0' }}
            w={{ base: '80%', md: '30%' }}
            zIndex="docked"
            alignItems="flex-start"
            flexDirection={'row'}
          >
            <Flex
              // bg="black"
              alignItems="flex-start"
              padding={{ base: '5%', sm: '5%', md: '2%', '2xl': '4%' }}
              mt={{ base: '-5%', sm: '-4%', md: '-3%', '2xl': '-4%' }}
            >
              <Text variant={'berneckPlusTestInfoNumber' as any}>2</Text>
            </Flex>
            <Flex
              // bg="white"
              padding={'2%'}
            >
              <Text>{testSteps && testSteps.second}</Text>
            </Flex>
          </Flex>

          {/* LINHA 3 */}
          <Flex
            // marginY={{ base: '3%', md: '0' }}
            w={{ base: '80%', md: '30%' }}
            zIndex="docked"
            alignItems="flex-start"
            flexDirection={'row'}
          >
            <Flex
              // bg="black"
              alignItems="flex-start"
              padding={{ base: '5%', sm: '5%', md: '2%', '2xl': '4%' }}
              mt={{ base: '-5%', sm: '-4%', md: '-3%', '2xl': '-4%' }}
            >
              <Text variant={'berneckPlusTestInfoNumber' as any}>3</Text>
            </Flex>
            <Flex
              // bg="white"
              padding={'2%'}
            >
              <Text>{testSteps && testSteps.third}</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          // bg="violet"
          justifyContent={{ base: 'space-between', md: 'center' }}
          // justifyItems={{ base: 'center', md: 'center' }}
          // alignContent={{ base: 'center', md: 'center' }}
          alignItems={{ base: 'none', md: 'center' }}
        >
          <Box
            width={{ base: '100%', md: '60%' }}
            // flex="2"
          >
            <Text
              margin={{
                base: '2%',
                md: '3%',
                lg: '5%',
                xl: '5%',
                '2xl': '5%'
              }}
              as={'h3'}
              variant={'h3'}
              color="green.900"
              fontWeight={'extrabold'}
            >
              {extraInfoTitle}
            </Text>
            <Box
            // bg="blue"
            >
              {extraInfoBody &&
                extraInfoBody.map((e, j) => <ItemCite key={j} text={e} />)}
            </Box>
          </Box>
          <Box
            // flex="1"
            bg="gray.450"
            padding={'2%'}
            marginLeft={{ md: '2%' }}
          >
            {tableInfo && <PlusInfoTable rows={tableInfo.rows} />}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

const ItemCite = ({ text = '' }) => {
  return (
    <Flex marginBottom="5%">
      <Box
        margin={{
          base: '3px',
          md: '3px',
          lg: '6px',
          xl: '8px',
          '2xl': '10px'
        }}
      >
        <ArrowIcon
          width={{
            base: '4px',
            md: '4px',
            lg: '4px',
            xl: '5px',
            '2xl': '6px'
          }}
          stroke="green.600"
        />
      </Box>
      <Text
        variant={'productBody' as any}
        mt={{
          base: '-3px',
          md: '4px',
          lg: '4px',
          xl: '2px',
          '2xl': '2px'
        }}
      >
        {text}
      </Text>
    </Flex>
  )
}
