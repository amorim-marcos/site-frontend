import { Story, Meta } from '@storybook/react'
import { AlertIcon, AlertIconProps } from './AlertIcon'

export default {
  title: 'AlertIcon',
  component: AlertIcon
} as Meta

export const Default: Story<AlertIconProps> = (args) => <AlertIcon {...args} />
