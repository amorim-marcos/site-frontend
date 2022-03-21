import { Story, Meta } from '@storybook/react'
import { Paragraph, ParagraphProps } from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph
} as Meta

export const Default: Story<ParagraphProps> = (args) => <Paragraph {...args} />
