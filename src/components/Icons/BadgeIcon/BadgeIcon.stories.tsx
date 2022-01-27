import { Story, Meta } from '@storybook/react'
import { BadgeIcon, BadgeIconProps } from './BadgeIcon'

export default {
  title: 'BadgeIcon',
  component: BadgeIcon
} as Meta

export const Default: Story<BadgeIconProps> = (args) => <BadgeIcon {...args} />
