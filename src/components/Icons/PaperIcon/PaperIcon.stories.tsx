import { Story, Meta } from '@storybook/react'
import { PaperIcon, PaperIconProps } from './PaperIcon'

export default {
  title: 'PaperIcon',
  component: PaperIcon
} as Meta

export const Default: Story<PaperIconProps> = (args) => <PaperIcon {...args} />
