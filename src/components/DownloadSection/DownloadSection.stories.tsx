import { Story, Meta } from '@storybook/react'
import { DownloadSection, DownloadSectionProps } from './DownloadSection'

export default {
  title: 'DownloadSection',
  component: DownloadSection
} as Meta

export const Default: Story<DownloadSectionProps> = (args) => <DownloadSection {...args} />
