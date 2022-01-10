import { Story, Meta } from '@storybook/react'
import { SynergyIcon, SynergyIconProps } from './SynergyIcon'

export default {
  title: 'SynergyIcon',
  component: SynergyIcon
} as Meta

const Template: Story<SynergyIconProps> = (args) => <SynergyIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100px',
  width: '100px'
}