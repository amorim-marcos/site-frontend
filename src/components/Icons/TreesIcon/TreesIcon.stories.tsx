import { Story, Meta } from '@storybook/react'
import { TreesIcon, TreesIconProps } from './TreesIcon'

export default {
  title: 'TreesIcon',
  component: TreesIcon
} as Meta

const Template: Story<TreesIconProps> = (args) => <TreesIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}