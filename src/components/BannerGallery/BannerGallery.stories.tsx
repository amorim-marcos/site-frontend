import { Story, Meta } from '@storybook/react'
import { BannerGallery, BannerGalleryProps } from './BannerGallery'

export default {
  title: 'BannerGallery',
  component: BannerGallery
} as Meta

export const Default: Story<BannerGalleryProps> = (args) => <BannerGallery {...args} />
