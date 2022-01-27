import { Story, Meta } from '@storybook/react'
import { ContactChannelFormLabel, ContactChannelFormLabelProps } from './ContactChannelFormLabel'

export default {
  title: 'ContactChannelFormLabel',
  component: ContactChannelFormLabel
} as Meta

export const Default: Story<ContactChannelFormLabelProps> = (args) => <ContactChannelFormLabel {...args} />
