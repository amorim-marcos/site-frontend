import { Story, Meta } from '@storybook/react'
import { FireAlert, FireAlertProps } from './FireAlert'

export default {
  title: 'FireAlert',
  component: FireAlert
} as Meta

export const Default: Story<FireAlertProps> = (args) => <FireAlert {...args} />
