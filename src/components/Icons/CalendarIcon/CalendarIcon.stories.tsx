import { Story, Meta } from '@storybook/react'
import { CalendarIcon, CalendarIconProps } from './CalendarIcon'

export default {
  title: 'CalendarIcon',
  component: CalendarIcon
} as Meta

export const Default: Story<CalendarIconProps> = (args) => <CalendarIcon {...args} />
