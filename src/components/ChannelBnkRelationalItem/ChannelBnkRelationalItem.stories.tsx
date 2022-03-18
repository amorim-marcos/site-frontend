import { Story, Meta } from '@storybook/react'
import { ChannelBnkRelationalItem, ChannelBnkRelationalItemProps } from './ChannelBnkRelationalItem'

export default {
  title: 'ChannelBnkRelationalItem',
  component: ChannelBnkRelationalItem
} as Meta

export const Default: Story<ChannelBnkRelationalItemProps> = (args) => <ChannelBnkRelationalItem {...args} />
