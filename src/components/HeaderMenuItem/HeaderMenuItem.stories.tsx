import { Story, Meta } from '@storybook/react'
import { HeaderMenuItem, HeaderMenuItemProps } from './HeaderMenuItem'

export default {
  title: 'HeaderMenuItem',
  component: HeaderMenuItem
} as Meta

export const Default: Story<HeaderMenuItemProps> = (args) => <HeaderMenuItem {...args} />
