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
    WhatsApp: undefined
  }

  const contactsTypeToDisplay = ['WeChat']

  const displayContactType = contactsTypeToDisplay.includes(
    contact.contact_type
  )

  return (
    <Text variant={'body' as any} fontSize={'90%'} textAlign={'center'}>
      {/* {iconHrefMapping[contact.contact_type]} {contact.contact_text} */}
      <CustomLink
        linkTo={
          iconHrefMapping[contact.contact_type]
            ? iconHrefMapping[contact.contact_type] + ':' + contact.contact_text
            : undefined
        }
        textAlign={'center'}
        justify={'center'}
      >
        {displayContactType && contact.contact_type + ': '}
        {contact.contact_text}
      </CustomLink>
    </Text>
  )
}
