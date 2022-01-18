import { Story, Meta } from '@storybook/react'
import { EmissionIcon, EmissionIconProps } from './EmissionIcon'

export default {
  title: 'EmissionIcon',
  component: EmissionIcon
} as Meta

const Template: Story<EmissionIconProps> = (args) => <EmissionIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '90',
  width: '40'
}