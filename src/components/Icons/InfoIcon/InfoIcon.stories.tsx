import { Story, Meta } from '@storybook/react'
import { InfoIcon, InfoIconProps } from './InfoIcon'

export default {
  title: 'InfoIcon',
  component: InfoIcon
} as Meta

export const Default: Story<InfoIconProps> = (args) => <InfoIcon {...args} />
