import { Story, Meta } from '@storybook/react'
import {
  SectionPackBpDownloads,
  SectionPackBpDownloadsProps
} from './SectionPackBpDownloads'

export default {
  title: 'SectionPackBpDownloads',
  component: SectionPackBpDownloads,
  args: {
    title: 'Title',
    text: 'Text',
    download_url: '/',
    download_url_jpgs: '/',
    download_url_skps: '/',
    patterns_pack_download_jpgs: undefined,
    patterns_pack_download_skps: undefined
  } as SectionPackBpDownloadsProps
} as Meta

export const Default: Story = (args) => (
  <SectionPackBpDownloads
    title={args.title}
    text={args.text}
    download_url={args.download_url}
    download_url_jpgs={args.download_url_jpgs}
    download_url_skps={args.download_url_skps}
    patterns_pack_download_jpgs={args.patterns_pack_download_jpgs}
    patterns_pack_download_skps={args.patterns_pack_download_skps}
    sectionId=""
  />
)
