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
        <DatasheetIcon width="30px" stroke={textColor} />
      ) : iconName === 'location' ? (
        <LocationIcon width="30px" stroke={textColor} />
      ) : (
        <QualityCertificateIcon width="30px" stroke={textColor} />
      )}
      <Text
        _hover={{ color: hoverColor }}
        color={textColor}
        fontSize="20px"
        fontWeight="bold"
        width="160px"
        marginLeft="15px"
      >
        {text}
      </Text>
    </Flex>
  )
}
