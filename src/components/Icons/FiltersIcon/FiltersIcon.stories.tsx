import { Story, Meta } from '@storybook/react'
import { WaterIcon, WaterIconProps } from './FiltersIcon'

export default {
  title: 'WaterIcon',
  component: WaterIcon
} as Meta

const Template: Story<WaterIconProps> = (args) => <WaterIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'green.300',
  height: '22',
  width: '22'
}
