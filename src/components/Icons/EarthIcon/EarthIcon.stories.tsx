import { Story, Meta } from '@storybook/react'
import { EarthIcon, EarthIconProps } from './EarthIcon'

export default {
  title: 'EarthIcon',
  component: EarthIcon
} as Meta

export const Default: Story<EarthIconProps> = (args) => <EarthIcon {...args} />
