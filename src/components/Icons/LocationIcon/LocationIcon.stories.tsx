import { Story, Meta } from '@storybook/react'
import { LocationIcon, LocationIconProps } from './LocationIcon'

export default {
  title: 'LocationIcon',
  component: LocationIcon
} as Meta

export const Default: Story<LocationIconProps> = (args) => <LocationIcon {...args} />
