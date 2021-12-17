import { Story, Meta } from '@storybook/react'
import { HeaderMenuSubItem, HeaderMenuSubItemProps } from './HeaderMenuSubItem'

export default {
  title: 'HeaderMenuSubItem',
  component: HeaderMenuSubItem
} as Meta

export const Default: Story<HeaderMenuSubItemProps> = (args) => <HeaderMenuSubItem {...args} />
