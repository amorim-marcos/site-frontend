import { Story, Meta } from '@storybook/react'
import { PatternInfo, PatternInfoProps } from './PatternInfo'

export default {
  title: 'PatternInfo',
  component: PatternInfo
} as Meta

export const Default: Story<PatternInfoProps> = (args) => <PatternInfo {...args} />
