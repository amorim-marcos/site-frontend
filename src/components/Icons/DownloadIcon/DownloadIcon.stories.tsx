import { Story, Meta } from '@storybook/react'
import { DownloadIcon, DownloadIconProps } from './DownloadIcon'

export default {
  title: 'DownloadIcon',
  component: DownloadIcon
} as Meta

export const Default: Story<DownloadIconProps> = (args) => <DownloadIcon {...args} />
