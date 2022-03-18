import { Story, Meta } from '@storybook/react'
import { FeaturedBanner, FeaturedBannerProps } from './FeaturedBanner'

export default {
  title: 'FeaturedBanner',
  component: FeaturedBanner
} as Meta

export const Default: Story<FeaturedBannerProps> = (args) => <FeaturedBanner {...args} />
