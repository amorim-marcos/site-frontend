import { Story, Meta } from '@storybook/react'
import { AttentionIcon, AttentionIconProps } from './AttentionIcon'

export default {
  title: 'AttentionIcon',
  component: AttentionIcon
} as Meta

const Template: Story<AttentionIconProps> = (args) => (
  <AttentionIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  color: 'gray.100',
  height: '33px',
  width: '33px'
}
