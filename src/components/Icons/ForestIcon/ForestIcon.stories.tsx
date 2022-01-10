import { Story, Meta } from '@storybook/react'
import { ForestIcon, ForestIconProps } from './ForestIcon'

export default {
  title: 'ForestIcon',
  component: ForestIcon
} as Meta

const Template: Story<ForestIconProps> = (args) => <ForestIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}