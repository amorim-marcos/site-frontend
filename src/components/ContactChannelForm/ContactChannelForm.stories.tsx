import { Story, Meta } from '@storybook/react'
import { ContactChannelForm, ContactChannelFormProps } from './ContactChannelForm'

export default {
  title: 'ContactChannelForm',
  component: ContactChannelForm
} as Meta

export const Default: Story<ContactChannelFormProps> = (args) => <ContactChannelForm {...args} />
