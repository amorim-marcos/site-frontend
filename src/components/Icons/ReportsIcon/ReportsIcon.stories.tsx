import { Story, Meta } from '@storybook/react'
import { ReportsIcon, ReportsIconProps } from './ReportsIcon'

export default {
  title: 'ReportsIcon',
  component: ReportsIcon
} as Meta

const Template: Story<ReportsIconProps> = (args) => <ReportsIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  height: '100',
  width: '100'
}