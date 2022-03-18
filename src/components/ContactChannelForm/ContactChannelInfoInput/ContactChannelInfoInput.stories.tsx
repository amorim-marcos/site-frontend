import { Story, Meta } from '@storybook/react'
import { ContactChannelInfoInput, ContactChannelInfoInputProps } from './ContactChannelInfoInput'

export default {
  title: 'ContactChannelInfoInput',
  component: ContactChannelInfoInput
} as Meta

export const Default: Story<ContactChannelInfoInputProps> = (args) => <ContactChannelInfoInput {...args} />
