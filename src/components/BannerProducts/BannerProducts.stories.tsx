import { Story, Meta } from '@storybook/react'
import { BannerProducts, BannerProductsProps } from './BannerProducts'

export default {
  title: 'BannerProducts',
  component: BannerProducts
} as Meta

export const Default: Story<BannerProductsProps> = (args) => <BannerProducts {...args} />
