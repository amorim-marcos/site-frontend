import { Story, Meta } from '@storybook/react'
import { HouseIcon, HouseIconProps } from './HouseIcon'

export default {
  title: 'HouseIcon',
  component: HouseIcon
} as Meta

const Template: Story<HouseIconProps> = (args) => <HouseIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}
