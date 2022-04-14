import { Flex, Text } from '@chakra-ui/react'
import LocationIcon from '@components/Icons/LocationIcon'
import QualityCertificateIcon from '@components/Icons/QualityCertificateIcon'
import { useState } from 'react'
import { DatasheetIcon } from '../../../Icons/DatasheetIcon/DatasheetIcon'

export type ProductDownloadItemProps = {
  text?: string
  textColor?: string
  hoverColor?: string
  onClick?: () => void
  iconName?: 'datasheet' | 'location' | 'qualityCertificate'
  backgroundColor?: string
}

export const ProductDownloadItem = ({
  hoverColor,
  textColor = '#665E5A',
  text = 'Ficha técnica',
  onClick,
  iconName = 'datasheet',
  backgroundColor = '#FFF'
}: ProductDownloadItemProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Flex
      cursor={'pointer'}
      // padding={{ base: '2%', md: '0' }}
      h={{
        base: '100px',
        md: '65px',
        lg: '85px',
        xl: '100px'
      }}
      w={{
        base: '90vw',
        md: '125px',
        lg: '165px',
        xl: '216px',
        '2xl': '270px'
      }}
      onClick={onClick}
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor}
      marginBottom={{ base: '15px', md: '0px' }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {iconName === 'datasheet' ? (
        <DatasheetIcon
          width={{
            base: '25px',
            md: '13px',
            lg: '15px',
            xl: '20px'
          }}
          stroke={isHover ? hoverColor : textColor}
        />
      ) : iconName === 'location' ? (
        <LocationIcon
          width={{
            base: '20px',
            md: '13px',
            lg: '15px',
            xl: '20px'
          }}
          stroke={isHover ? hoverColor : textColor}
        />
      ) : (
        <QualityCertificateIcon
          width={{
            base: '25px',
            md: '20px',
            lg: '18px',
            xl: '20px'
          }}
          stroke={isHover ? hoverColor : textColor}
        />
      )}
      <Text as={"h5"}
        variant={"h5"}
        color={textColor}
        fontWeight="bold"
        marginLeft={{
          base: '15px',
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
