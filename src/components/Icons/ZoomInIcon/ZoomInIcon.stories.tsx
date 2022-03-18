import { Story, Meta } from '@storybook/react'
import { ZoomInIcon, ZoomInIconProps } from './ZoomInIcon'

export default {
  title: 'ZoomInIcon',
  component: ZoomInIcon
} as Meta

export const Default: Story<ZoomInIconProps> = (args) => (
  <ZoomInIcon {...args} />
)
