import { Story, Meta } from '@storybook/react'
import { SmallGridIcon, SmallGridIconProps } from './SmallGridIcon'

export default {
  title: 'SmallGridIcon',
  component: SmallGridIcon
} as Meta

const Template: Story<SmallGridIconProps> = (args) => <SmallGridIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '33',
  width: '33'
}
