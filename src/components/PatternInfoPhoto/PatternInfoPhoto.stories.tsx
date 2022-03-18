import { Story, Meta } from '@storybook/react'
import { PatternInfoPhoto, PatternInfoPhotoProps } from './PatternInfoPhoto'

export default {
  title: 'PatternInfoPhoto',
  component: PatternInfoPhoto
} as Meta

export const Default: Story<PatternInfoPhotoProps> = (args) => <PatternInfoPhoto {...args} />
