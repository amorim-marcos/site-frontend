import { Story, Meta } from '@storybook/react'
import { ProductDimensions, ProductDimensionsProps } from './ProductDimensions'

export default {
  title: 'ProductDimensions',
  component: ProductDimensions
} as Meta

export const Default: Story<ProductDimensionsProps> = (args) => (
  <ProductDimensions {...args} />
)
