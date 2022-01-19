import { Story, Meta } from '@storybook/react'
import { BpPatternImage, BpPatternImageProps } from './BpPatternImage'

export default {
  title: 'BpPatternImage',
  component: BpPatternImage
} as Meta

export const Default: Story<BpPatternImageProps> = (args) => <BpPatternImage {...args} />
