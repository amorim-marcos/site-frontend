import { Story, Meta } from '@storybook/react'
import { ProductsGallery, ProductsGalleryProps } from './ProductsGallery'

export default {
  title: 'ProductsGallery',
  component: ProductsGallery
} as Meta

export const Default: Story<ProductsGalleryProps> = (args) => <ProductsGallery {...args} />
