import { Story, Meta } from '@storybook/react'
import { GrafismLeft, GrafismLeftProps } from './GrafismLeft'

export default {
  title: 'GrafismLeft',
  component: GrafismLeft
} as Meta

export const Default: Story<GrafismLeftProps> = (args) => <GrafismLeft {...args} />
