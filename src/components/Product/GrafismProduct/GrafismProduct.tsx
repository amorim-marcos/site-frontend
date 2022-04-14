import {
  GrafismProduct1,
  GrafismProductProps as SubGrafismProps
} from './GrafismProduct1/GrafismProduct1'
import { GrafismProduct2 } from './GrafismProduct2/GrafismProduct2'
import { GrafismProduct3 } from './GrafismProduct3/GrafismProduct3'
import { Box } from '@chakra-ui/react'

export type GrafismProductProps = {
  grafism: 'type1' | 'type2' | 'type3'
  grafismProps?: SubGrafismProps
}

export const GrafismProduct = ({
  grafism,
  grafismProps
}: GrafismProductProps) => {
  return grafism === 'type1' ? (
    <Box
      position="absolute"
      top={{
        base: '-150px',
        sm: '-246px',
        md: '-324px',
        lg: '-404px',
        xl: '-480px',
        '2xl': '-630px'
      }}
      left={{ base: '0', sm: '40%' }}
      zIndex="base"
    >
      <GrafismProduct1
        width={{
          base: '920px',
          sm: '704px',
          md: '938px',
          lg: '1173px',
          xl: '1400px',
          '2xl': '1760px'
        }}
        {...grafismProps}
      />
    </Box>
  ) : grafism === 'type2' ? (
    <Box
      zIndex="base"
      position="absolute"
      top={{
        base: '-150px',
        sm: '-90px',
        md: '-130px',
        lg: '-160px',
        xl: '-180px',
        '2xl': '-236px'
      }}
      left={{ base: '40%', sm: '42%' , md: '36%', '2xl': '1100px' }}
      h={{ base: '300px', sm: 'auto' }}
      overflow="hidden"
    >
      <Box marginTop={{ base: '-110px', md: '0' }} >
        <GrafismProduct2
          width={{
            base: '700px',
            sm: '700px',
            md: '937px',
            lg: '1171px',
            xl: '1405px',
            '2xl': '1650px'
          }}
          {...grafismProps}
        />
      </Box>
    </Box>
  ) : (
    <Box
      zIndex="base"
      position="absolute"
      top={{
        base: '-190px',
        sm: '-94px',
        md: '-126px',
        lg: '-158px',
        xl: '-189px',
        '2xl': '-237px'
      }}
      left={{ base: '0px', sm: '36%' }}
    >
      <Box marginTop={{ base: '-110px', sm: '0' }}>
        <GrafismProduct3
          width={{
            base: '1102px',
            sm: '702px',
            md: '937px',
            lg: '1171px',
            xl: '1405px',
            '2xl': '1650px'
          }}
          {...grafismProps}
        />
      </Box>
    </Box>
  )
}
