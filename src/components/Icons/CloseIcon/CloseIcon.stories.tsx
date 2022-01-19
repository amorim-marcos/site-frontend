import { Story, Meta } from '@storybook/react'
import { CloseIcon, CloseIconProps } from './CloseIcon'

export default {
  title: 'CloseIcon',
  component: CloseIcon
} as Meta

export const Default: Story<CloseIconProps> = (args) => <CloseIcon {...args} />
