import { Story, Meta } from '@storybook/react'
import { GoogleMap, GoogleMapProps } from './GoogleMap'

export default {
  title: 'GoogleMap',
  component: GoogleMap
} as Meta

export const Default: Story<GoogleMapProps> = (args) => <GoogleMap {...args} />
