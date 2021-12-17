import { Story, Meta } from '@storybook/react'
import { LogoBerneck, LogoBerneckProps } from './LogoBerneck'

export default {
  title: 'LogoBerneck',
  component: LogoBerneck
} as Meta

export const Default: Story<LogoBerneckProps> = (args) => <LogoBerneck {...args} />
