/* eslint-disable @typescript-eslint/ban-types */
import { useState, useRef, useEffect } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { AttentionIcon } from '@components/Icons'

export type ContactChannelSelectButtonProps = ButtonProps & {
  name: string
  attention_required?: boolean
  service_code?: string
  setChannel?: Function
  unsetChannel?: Function
  onClick?: (isActive: boolean) => void
  onFinishRender?: (width: number, height: number) => void
  isActive?: boolean
  bgX?: number
  bgY?: number
}
export const ContactChannelSelectButton = ({
  name,
  attention_required = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  service_code,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setChannel,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unsetChannel,
  isActive = false,
  bgX = 0,
  bgY = 0,
  onClick,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFinishRender = () => {},
  ...props
}: ContactChannelSelectButtonProps) => {
  const [height, setHeight] = useState<number | null>(0)
  const [width, setWidth] = useState<number | null>(0)
  const ref = useRef<HTMLButtonElement>(null)

  const handleOnClick = () => {
    if (onClick) onClick(isActive)
  }

  useEffect(() => {
    const { current } = ref

    if (current && current.clientHeight && current.clientWidth) {
      setHeight(current.clientHeight)
      setWidth(current.clientWidth)
    }
  }, [])

  useEffect(() => {
    if (width && height && width > 0 && height > 0)
      onFinishRender(width, height)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height])

  return (
    <>
      <Button
        background={
          isActive
            ? 'url(/contact-channels/contact-channel-tab-bg-selecionado.svg) repeat'
            : 'url(/contact-channels/contact-channel-tab-bg-regular.svg) repeat'
        }
        backgroundPosition={`-${bgX}px -${bgY}px`}
        _hover={{
          background:
            'url(/contact-channels/contact-channel-tab-bg-hover.svg) repeat'
        }}
        ref={ref}
        onClick={handleOnClick}
        variant="contact-channel"
        backgroundColor={isActive ? 'brown.250' : 'brown.150'}
        color={isActive ? 'white.100' : 'gray.300'}
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
