import { Story, Meta } from '@storybook/react'
import { ContactChannelSelectButton, ContactChannelSelectButtonProps } from './ContactChannelSelectButton'

export default {
  title: 'ContactChannelSelectButton',
  component: ContactChannelSelectButton
} as Meta

export const Default: Story<ContactChannelSelectButtonProps> = (args) => <ContactChannelSelectButton {...args} />
