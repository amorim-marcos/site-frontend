import { Story, Meta } from '@storybook/react'
import { SocialIcon, SocialIconProps } from './SocialIcon'

export default {
  title: 'SocialIcon',
  component: SocialIcon
} as Meta

export const Default: Story<SocialIconProps> = (args) => <SocialIcon {...args} />
