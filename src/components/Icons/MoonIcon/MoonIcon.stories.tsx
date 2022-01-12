import { Story, Meta } from '@storybook/react'
import { MoonIcon, MoonIconProps } from './MoonIcon'

export default {
  title: 'MoonIcon',
  component: MoonIcon
} as Meta

const Template: Story<MoonIconProps> = (args) => <MoonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '18',
  width: '18'
}
