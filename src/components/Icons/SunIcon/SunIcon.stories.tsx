import { Story, Meta } from '@storybook/react'
import { SunIcon, SunIconProps } from './SunIcon'

export default {
  title: 'SunIcon',
  component: SunIcon
} as Meta

const Template: Story<SunIconProps> = (args) => <SunIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '22px',
  width: '22px'
}
