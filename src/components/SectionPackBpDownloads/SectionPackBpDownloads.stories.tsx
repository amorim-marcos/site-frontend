import { Story, Meta } from '@storybook/react'
import { SectionPackBpDownloads, SectionPackBpDownloadsProps } from './SectionPackBpDownloads'

export default {
  title: 'SectionPackBpDownloads',
  component: SectionPackBpDownloads,
  args: {
    title:"Title",
    text: "Text",
    download_url: "/"
  } as SectionPackBpDownloadsProps
} as Meta


export const Default: Story = (args) => <SectionPackBpDownloads title={args.title} text={args.text} download_url={args.download_url} />
