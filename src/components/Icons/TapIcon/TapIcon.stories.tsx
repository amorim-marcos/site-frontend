import { Story, Meta } from '@storybook/react'
import { TapIcon, TapIconProps } from './TapIcon'

export default {
  title: 'TapIcon',
  component: TapIcon
} as Meta

export const Default: Story<TapIconProps> = (args) => <TapIcon {...args} />
