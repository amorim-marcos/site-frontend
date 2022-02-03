import { Story, Meta } from '@storybook/react'
import { SectionPackBpDownloads } from './SectionPackBpDownloads'

export default {
  title: 'SectionPackBpDownloads',
  component: SectionPackBpDownloads
} as Meta

export const Default: Story = (args) => <SectionPackBpDownloads {...args} />
