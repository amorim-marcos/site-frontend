import { Story, Meta } from '@storybook/react'
import { Contactusicon, ContactusiconProps } from './Contactusicon'

export default {
  title: 'Contactusicon',
  component: Contactusicon
} as Meta

export const Default: Story<ContactusiconProps> = (args) => <Contactusicon {...args} />
