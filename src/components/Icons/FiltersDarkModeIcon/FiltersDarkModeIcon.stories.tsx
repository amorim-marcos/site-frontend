import { Story, Meta } from '@storybook/react'
import { FiltersDarkModeIcon, FiltersDarkModeIconProps } from './FiltersDarkModeIcon'

export default {
  title: 'FiltersDarkModeIcon',
  component: FiltersDarkModeIcon
} as Meta

const Template: Story<FiltersDarkModeIconProps> = (args) => <FiltersDarkModeIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'grey.100',
  height: '33px',
  width: '33px'
}
