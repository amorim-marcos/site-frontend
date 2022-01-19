import { Story, Meta } from '@storybook/react'
import { MapIcon, MapIconProps } from './MapIcon'

export default {
  title: 'MapIcon',
  component: MapIcon
} as Meta

export const Default: Story<MapIconProps> = (args) => <MapIcon {...args} />
