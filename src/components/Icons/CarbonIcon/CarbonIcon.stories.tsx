import { Story, Meta } from '@storybook/react'
import { CarbonIcon, CarbonIconProps } from './CarbonIcon'

export default {
  title: 'CarbonIcon',
  component: CarbonIcon
} as Meta

const Template: Story<CarbonIconProps> = (args) => <CarbonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '100',
  width: '100'
}