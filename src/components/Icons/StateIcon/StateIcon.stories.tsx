import { Story, Meta } from '@storybook/react'
import { StateIcon, StateIconProps } from './StateIcon'

export default {
  title: 'StateIcon',
  component: StateIcon
} as Meta

export const Default: Story<StateIconProps> = (args) => <StateIcon {...args} />
