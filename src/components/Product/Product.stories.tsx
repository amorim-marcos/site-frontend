import { Story, Meta } from '@storybook/react'
import { Product, ProductProps } from './Product'

export default {
  title: 'Product',
  component: Product
} as Meta

export const Default: Story<ProductProps> = (args) => <Product {...args} />
