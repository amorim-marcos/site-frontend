import { Story, Meta } from '@storybook/react'
import { EmployeesIcon, EmployeesIconProps } from './EmployeesIcon'

export default {
  title: 'EmployeesIcon',
  component: EmployeesIcon
} as Meta

const Template: Story<EmployeesIconProps> = (args) => <EmployeesIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '50px',
  width: '50px'
}