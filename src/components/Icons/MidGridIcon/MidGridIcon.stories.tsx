import { Story, Meta } from '@storybook/react'
import { MidGridIcon, MidGridIconProps } from './MidGridIcon'

export default {
  title: 'MidGridIcon',
  component: MidGridIcon
} as Meta

const Template: Story<MidGridIconProps> = (args) => <MidGridIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '33px',
  width: '33px'
}
