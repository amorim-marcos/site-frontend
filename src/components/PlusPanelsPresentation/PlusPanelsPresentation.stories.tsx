import { Story, Meta } from '@storybook/react'
import { PlusPanelsPresentation, PlusPanelsPresentationProps } from './PlusPanelsPresentation'

export default {
  title: 'PlusPanelsPresentation',
  component: PlusPanelsPresentation
} as Meta

export const Default: Story<PlusPanelsPresentationProps> = (args) => <PlusPanelsPresentation {...args} />
