import { Story, Meta } from '@storybook/react'
import { WaterIcon, WaterIconProps } from './WaterIcon'

export default {
  title: 'WaterIcon',
  component: WaterIcon
} as Meta

export const Default: Story<WaterIconProps> = (args) => <WaterIcon {...args} />
