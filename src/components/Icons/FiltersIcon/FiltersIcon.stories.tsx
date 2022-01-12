import { Story, Meta } from '@storybook/react'
import { FiltersIcon, FiltersIconProps } from './FiltersIcon'

export default {
  title: 'FiltersIcon',
  component: FiltersIcon
} as Meta

const Template: Story<FiltersIconProps> = (args) => <FiltersIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'green.300',
  height: '22px',
  width: '22px'
}
