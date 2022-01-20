import { Story, Meta } from '@storybook/react'
import { CompletedTitle, CompletedTitleProps } from './CompletedTitle'

export default {
  title: 'CompletedTitle',
  component: CompletedTitle
} as Meta

export const Default: Story<CompletedTitleProps> = (args) => <CompletedTitle {...args} />
