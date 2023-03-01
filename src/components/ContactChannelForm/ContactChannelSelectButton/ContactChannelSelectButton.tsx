/* eslint-disable @typescript-eslint/ban-types */
import { useState, useRef, useEffect } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { AttentionIcon } from '@components/Icons'
import { formatChannelNameUrl } from 'utils/utils'
import { useRouter } from 'next/router'

const colors = {
  default: {
    bg: '#E5D8C0',
    scratchs: '#F4ECDD',
    text: 'grey.300'
  },
  hover: {
    bg: '#D9C49C',
    scratchs: '#EDE1CA',
    text: 'grey.300'
  },
  active: {
    bg: '#D1B78E',
    scratchs: '#DBCAA8',
    text: '#FFFFFF'
  }
}

export type ContactChannelSelectButtonProps = ButtonProps & {
  name: string
  service_code: string
  attention_required?: boolean
  onClick?: (isActive: boolean) => void
  onFinishRender?: (width: number, height: number) => void
  isActive?: boolean
  bgX?: number
  bgY?: number
}

export const ContactChannelSelectButton = ({
  name,
  attention_required = false,
  isActive = false,
  bgX = 0,
  bgY = 0,
  onFinishRender,
  ...props
}: ContactChannelSelectButtonProps) => {
  const [height, setHeight] = useState<number | null>(0)
  const [width, setWidth] = useState<number | null>(0)
  const ref = useRef<HTMLButtonElement>(null)
  const router = useRouter();

  useEffect(() => {
    const { current } = ref

    if (current && current.clientHeight && current.clientWidth) {
      setHeight(current.clientHeight)
      setWidth(current.clientWidth)
    }
  }, [])

  useEffect(() => {
    if (width && height && width > 0 && height > 0)
      onFinishRender && onFinishRender(width, height)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  return (
    <>
      <Button 
        as="a"
        href={(router.locale == 'pt-BR') ? `/contact?channel=${formatChannelNameUrl(name)}`: `/${router.locale}/contact?channel=${formatChannelNameUrl(name)}` }
        background={
          isActive
            ? 'url(/contact-channels/contact-channel-tab-bg-selecionado.svg) repeat'
            : 'url(/contact-channels/contact-channel-tab-bg-regular.svg) repeat'
        }
        backgroundPosition={`-${bgX}px -${bgY}px`}
        ref={ref}
        variant="contact-channel"
        backgroundColor={isActive ? colors.active.bg : colors.default.bg}
        color={isActive ? colors.active.text : colors.default.text}
        _hover={{
          color: colors.hover.text,
          backgroundColor: isActive ? colors.active.bg : colors.hover.bg
        }}
        _focus={{ outline: 'none' }}
        {...props}
      >
        {name}
        {attention_required ? (
          <AttentionIcon position="absolute" top="-11px" right="5px" />
        ) : null}
      </Button>
    </>
  )
}
