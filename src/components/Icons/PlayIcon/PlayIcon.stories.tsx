import { Story, Meta } from '@storybook/react'
import { PlayIcon, PlayIconProps } from './PlayIcon'

export default {
  title: 'PlayIcon',
  component: PlayIcon
} as Meta

export const Default: Story<PlayIconProps> = (args) => <PlayIcon {...args} />
