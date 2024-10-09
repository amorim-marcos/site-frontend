import { Heading, Flex, Box, Text, Center, Container } from '@chakra-ui/react'
import CustomLink from '@components/CustomLink'
import { Contact } from 'types/data/WhereBuy'

export interface ContactItemProps {
  contact: Contact
}

export const ContactItem = ({ contact }: ContactItemProps) => {
  const iconHrefMapping = {
    phone: 'tel',
    email: 'mailto',
    WeChat: undefined,
    WhatsApp: undefined,
    site: undefined
  }

  const contactsTypeToDisplay = ['WeChat']

  const displayContactType = contactsTypeToDisplay.includes(
    contact.contact_type
  )

  let contactHref = iconHrefMapping[contact.contact_type]
    ? iconHrefMapping[contact.contact_type] + ':' + contact.contact_text
    : undefined

  if (contact.contact_type === 'site') {
    contactHref = `https://` + contact.contact_text
  }

  return (
    <Text variant={'body' as any} fontSize={'90%'} textAlign={'center'}>
      {/* {iconHrefMapping[contact.contact_type]} {contact.contact_text} */}
      <CustomLink
        linkTo={contactHref}
        textAlign={'center'}
        justify={'center'}
        target={contact.contact_type === 'site' ? '_blank' : '_self'}
      >
        {displayContactType && contact.contact_type + ': '}
        {contact.contact_text}
      </CustomLink>
    </Text>
  )
}
