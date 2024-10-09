import { Story, Meta } from '@storybook/react'
import { ContactItem, ContactItemProps } from './ContactItem'

export default {
  title: 'ContactItem',
  component: ContactItem
} as Meta

export const Default: Story<ContactItemProps> = (args) => (
  <ContactItem {...args} />
)
