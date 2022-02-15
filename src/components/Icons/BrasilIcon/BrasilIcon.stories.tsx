import { Story, Meta } from '@storybook/react'
import { BrasilIcon, BrasilIconProps } from './BrasilIcon'

export default {
  title: 'ArrowIcon',
  component: BrasilIcon
} as Meta

export const Default: Story<BrasilIconProps> = (args) => (
  <BrasilIcon {...args} />
)
