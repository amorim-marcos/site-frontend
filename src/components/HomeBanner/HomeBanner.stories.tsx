import { Story, Meta } from '@storybook/react'
import { HomeBanner, HomeBannerProps } from './HomeBanner'

export default {
  title: 'HomeBanner',
  component: HomeBanner
} as Meta

export const Default: Story<HomeBannerProps> = (args) => <HomeBanner {...args} />
