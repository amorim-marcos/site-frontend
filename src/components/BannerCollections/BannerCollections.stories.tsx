import { Story, Meta } from '@storybook/react'
import { BannerCollections, BannerCollectionsProps } from './BannerCollections'

export default {
  title: 'BannerCollections',
  component: BannerCollections
} as Meta

export const Default: Story<BannerCollectionsProps> = (args) => <BannerCollections {...args} />
