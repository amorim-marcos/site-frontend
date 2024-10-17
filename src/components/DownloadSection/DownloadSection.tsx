import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  FlexProps,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import Arrow from '@components/Arrow'
import CustomModal from '@components/CustomModal'
import HtmlTextParser from '@components/HtmlTextParser'

import UrlCopyIcon from '@components/UrlCopyIcon'
import useMobile from 'hooks/useMobile'
import useRouterCustom from 'hooks/useRouterCustom'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPageCompleteUrl } from 'utils/utils'

export type DownloadSectionProps = {
  title: string
  sectionId: string
  description: string
  grafism: 'type1' | 'type2' | 'type3'
  items: DownloadSectionItemProps[]
  displayContentOnModal?: boolean
}

export type DownloadSectionItemProps = {
  title: string
  urlImage: string
  downloadUrl: string
  issuu_embed_code: string
}

interface FormattedDownloadItem
  extends Omit<DownloadSectionItemProps, 'issuu_embed_code'> {
  issuu_embed_code: JSX.Element | undefined
}
export const DownloadSection = ({
  title,
  grafism,
  items,
  description,
  sectionId,
  displayContentOnModal = false
}: DownloadSectionProps) => {
  const { isMobile } = useMobile(768)
  const [itemsData, setItemsData] = useState(items)
  const [hoverBtnControl, setHoverBtnControl] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FormattedDownloadItem>()

  const checkIsMobile = (maxWidth?: number) => {
    return window.innerWidth <= (maxWidth || 768)
  }

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose
  } = useDisclosure()

  const { addQueryToUrl, removeQueryFromUrl } = useRouterCustom()

  const router = useRouter()

  useEffect(() => {
    const queries = router.query

    if (queries && queries.modal === 'true' && selectedItem) {
      onModalOpen()
      return
    }
    onModalClose()
  }, [router.query])

  const toggleModal = () => {
    if (isModalOpen) {
      removeQueryFromUrl('modal', true)
      // onModalClose()
    } else {
      addQueryToUrl('modal', 'true', true)
      // onModalOpen()
    }
  }

  const { asPath } = useRouter()

  const pathWithouHash = asPath.split('#')[0]

  const completeBaseUrl = getPageCompleteUrl(pathWithouHash)

  function avanceRight() {
    if (isMobile || items.length > 5) {
      const item = itemsData[0]
      const newArray = itemsData.filter((j, i) => i > 0)
      newArray.push(item)
      setItemsData(newArray)
    }
  }

  function avanceLeft() {
    if (isMobile || items.length > 5) {
      const item = itemsData[itemsData.length - 1]
      const newArray = itemsData.filter((j, i) => i < itemsData.length - 1)
      newArray.unshift(item)
      setItemsData(newArray)
    }
  }

  // todo
  // to handle invalid issuu embed code
  function checkToDisplayOnModal(item: DownloadSectionItemProps) {
    return displayContentOnModal && item.issuu_embed_code
  }

  function handleClickItem(item: DownloadSectionItemProps) {
    if (!checkToDisplayOnModal(item)) return

    const formattedIssuuJSX = getJsxIssuuEmbedCode(item.issuu_embed_code)
    const newFormattedItem = { ...item, issuu_embed_code: formattedIssuuJSX }

    setSelectedItem(newFormattedItem)

    toggleModal()
  }

  // change style properties and format the issuu embed code to jsx
  function getJsxIssuuEmbedCode(issuu_embed_code: string | undefined) {
    if (!issuu_embed_code) return

    const div = document.createElement('div')
    div.innerHTML = issuu_embed_code

    const jsxElement = div.firstElementChild as HTMLElement

    // change the page layout to single page if is mobile

    if (checkIsMobile()) {
      const frameElement = jsxElement?.querySelector('iframe')
      const frameSrc = frameElement?.getAttribute('src')
      const frameURL = new URL(frameSrc || '')
      frameURL.searchParams.set('pageLayout', 'singlePage')

      frameElement?.setAttribute('src', frameURL.href)
    }

    jsxElement.style.height = '100%'
    jsxElement.style.paddingTop = '59%'
    jsxElement.style.width = '100%'

    const htmlStringElement = jsxElement.outerHTML

    const convertedJsxElement = (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlStringElement
        }}
        style={{
          height: '100%'
        }}
      ></div>
    )

    return convertedJsxElement
  }

  return (
    <Flex
      marginBottom="10%"
      flexDir="column"
      p="3%"
      bg="green.100"
      position="relative"
      paddingBottom={{ base: '10%', md: '0' }}
    >
      <UrlCopyIcon urlToCopy={completeBaseUrl + '#' + sectionId} />
      <Text as="h3" variant={'h3' as any} color="green.800" zIndex="docked">
        {title}
      </Text>
      <Text variant={'body' as any} color="green.900" zIndex="docked">
        <HtmlTextParser>{description}</HtmlTextParser>
      </Text>

      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        top={'0'}
        right={'0'}
        zIndex="base"
      >
        <Image
          src={
            grafism === 'type1'
              ? '/img/grafism_downloads1.png'
              : grafism === 'type2'
              ? '/img/grafism_downloads2.png'
              : '/img/grafism_downloads3.png'
          }
          width="43vw"
        />
      </Box>

      <Flex
        zIndex="docked"
        marginY="3%"
        justifyContent={{
          base: 'center',
          md: itemsData.length > 4 ? 'space-between' : 'flex-start'
        }}
      >
        {itemsData
          ? itemsData.map((item, i) => {
              return i < 5 ? (
                <Item
                  key={i}
                  url={
                    !checkToDisplayOnModal(item) ? item.downloadUrl : undefined
                  }
                  cursor={'pointer'}
                  display={
                    i < 1 ? { base: 'flex' } : { base: 'none', md: 'flex' }
                  }
                  imageUrl={item.urlImage}
                  title={item.title}
                  marginRight={
                    itemsData.length <= 4 ? { base: '0', md: '3.5%' } : '0'
                  }
                  onClick={() => handleClickItem(item)}
                />
              ) : (
                ''
              )
            })
          : []}
      </Flex>
      {(items.length > 5 || isMobile) && (
        <Flex
          position="absolute"
          left="0px"
          right="0px"
          marginX="auto"
          w="fit-content"
          bottom={{ base: '-20px', sm: '-20px', lg: '-30px', xl: '-30px' }}
        >
          <Button
            onMouseEnter={() => setHoverBtnControl(true)}
            onMouseLeave={() => setHoverBtnControl(false)}
            variant="no-border"
            background="gray.300"
            color="gray.150"
            w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            _hover={{
              background: 'green.550',
              color: 'white.100'
            }}
            onClick={avanceLeft}
          >
            {isMobile ? (
              <Arrow width="5" height="5" direction="left" />
            ) : (
              <Arrow width="22" height="30" direction="left" />
            )}
          </Button>
          <Button
            onMouseEnter={() => setHoverBtnControl(true)}
            onMouseLeave={() => setHoverBtnControl(false)}
            variant="no-border"
            background="gray.300"
            color="gray.150"
            w={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            h={{ base: '40px', sm: '45px', lg: '50px', xl: '55px' }}
            _hover={{
              background: 'green.550',
              color: 'white.100'
            }}
            onClick={avanceRight}
          >
            {isMobile ? (
              <Arrow width="5" height="5" direction="right" />
            ) : (
              <Arrow width="22" height="30" direction="right" />
            )}
          </Button>
        </Flex>
      )}
      <CustomModal
        isModalOpen={isModalOpen}
        // modalTitle="Teste de modal"
        onModalClose={toggleModal}
        modalSize={checkIsMobile() ? 'full' : '5xl'}
        // modalHeight="100%"
        displayAbsoluteCloseIcon
      >
        {selectedItem?.issuu_embed_code ? selectedItem.issuu_embed_code : ''}
      </CustomModal>
    </Flex>
  )
}

export interface ItemProps extends FlexProps {
  imageUrl: string
  title: string
  url?: string
}

const Item = ({ url, title, imageUrl, ...props }: ItemProps) => {
  return (
    <Flex
      {...props}
      w={{ base: '90%', md: '17%' }}
      flexDirection="column"
      alignItems="center"
    >
      <Link href={url} w="100%" isExternal>
        <Flex
          w="100%"
          h={{
            base: '334px',
            md: '178px',
            lg: '222px',
            xl: '267px',
            '2xl': '334px'
          }}
          bg="white.100"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={imageUrl} maxHeight="90%" maxWidth="70%" />
        </Flex>
        <Text marginTop="10%" color="brown.300" variant={'body' as any}>
          {title}
        </Text>
      </Link>
    </Flex>
  )
}
