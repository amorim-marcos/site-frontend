import { Story, Meta } from '@storybook/react'
import { BagIcon, BagIconProps } from './BagIcon'

export default {
  title: 'BagIcon',
  component: BagIcon
} as Meta

export const Default: Story<BagIconProps> = (args) => <BagIcon {...args} />
