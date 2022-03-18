import { Story, Meta } from '@storybook/react'
import { HighlightBoxPanel, HighlightBoxPanelProps } from './HighlightBoxPanel'

export default {
  title: 'HighlightBoxPanel',
  component: HighlightBoxPanel
} as Meta

export const Default: Story<HighlightBoxPanelProps> = (args) => <HighlightBoxPanel {...args} />
