import { Story, Meta } from '@storybook/react'
import { WaterIcon, WaterIconProps } from './WaterIcon'

export default {
  title: 'WaterIcon',
  component: WaterIcon
} as Meta

const Template: Story<WaterIconProps> = (args) => <WaterIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}
