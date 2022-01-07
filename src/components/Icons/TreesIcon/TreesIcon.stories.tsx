import { Story, Meta } from '@storybook/react'
import { TreesIcon, TreesIconProps } from './TreesIcon'

export default {
  title: 'TreesIcon',
  component: TreesIcon
} as Meta

export const Default: Story<TreesIconProps> = (args) => <TreesIcon {...args} />
