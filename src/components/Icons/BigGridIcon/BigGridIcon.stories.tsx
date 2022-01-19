import { Story, Meta } from '@storybook/react'
import { BigGridIcon, BigGridIconProps } from './BigGridIcon'

export default {
  title: 'BigGridIcon',
  component: BigGridIcon
} as Meta

const Template: Story<BigGridIconProps> = (args) => <BigGridIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '33px',
  width: '33px'
}
