import { Flex, Text } from '@chakra-ui/react'
import LocationIcon from '@components/Icons/LocationIcon'
import QualityCertificateIcon from '@components/Icons/QualityCertificateIcon'
import { DatasheetIcon } from '../../../Icons/DatasheetIcon/DatasheetIcon'

export type ProductDownloadItemProps = {
  text?: string
  textColor?: string
  hoverColor?: string
  onClick?: () => void
  iconName?: 'datasheet' | 'location' | 'qualityCertificate'
}

export const ProductDownloadItem = ({
  hoverColor,
  textColor = '#665E5A',
  text = 'Ficha técnica',
  onClick,
  iconName = 'datasheet'
}: ProductDownloadItemProps) => {
  return (
    <Flex onClick={onClick} justifyContent="center" alignItems="center">
      {iconName === 'datasheet' ? (
        <DatasheetIcon
          width={{
            base: '7px',
            sm: '8px',
            md: '13px',
            lg: '15px',
            xl: '20px',
            '2xl': '30px'
          }}
          stroke={textColor}
        />
      ) : iconName === 'location' ? (
        <LocationIcon
          width={{
            base: '7px',
            sm: '8px',
            md: '13px',
            lg: '15px',
            xl: '20px',
            '2xl': '30px'
          }}
          stroke={textColor}
        />
      ) : (
        <QualityCertificateIcon
          width={{
            base: '7px',
            sm: '8px',
            md: '13px',
            lg: '15px',
            xl: '20px',
            '2xl': '30px'
          }}
          stroke={textColor}
        />
      )}
      <Text
        _hover={{ color: hoverColor }}
        color={textColor}
        fontSize={{
          base: '6px',
          sm: '8px',
          md: '10px',
          lg: '14px',
          xl: '16px',
          '2xl': '20px'
        }}
        fontWeight="bold"
        width={{
          base: '10px',
          sm: '70px',
          md: '93px',
          lg: '110px',
          xl: '130px',
          '2xl': '160px'
        }}
        marginLeft={{
          base: '5px',
          sm: '7px',
          md: '9px',
          lg: '11px',
          xl: '13px',
          '2xl': '15px'
        }}
      >
        {text}
      </Text>
    </Flex>
  )
}
