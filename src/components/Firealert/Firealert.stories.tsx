import { Story, Meta } from '@storybook/react'
import { Firealert, FirealertProps } from './Firealert'

export default {
  title: 'Firealert',
  component: Firealert
} as Meta

export const Default: Story<FirealertProps> = (args) => <Firealert {...args} />
