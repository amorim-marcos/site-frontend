import { Story, Meta } from '@storybook/react'
import { HouseIcon, HouseIconProps } from './HouseIcon'

export default {
  title: 'HouseIcon',
  component: HouseIcon
} as Meta

export const Default: Story<HouseIconProps> = (args) => <HouseIcon {...args} />
