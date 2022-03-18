import { Story, Meta } from '@storybook/react'
import { EnergyIcon, EnergyIconProps } from './EnergyIcon'

export default {
  title: 'EnergyIcon',
  component: EnergyIcon
} as Meta

const Template: Story<EnergyIconProps> = (args) => <EnergyIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}