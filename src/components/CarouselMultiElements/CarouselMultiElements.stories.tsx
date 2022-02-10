import { Story, Meta } from '@storybook/react'
import {
  CarouselMultiElements,
  CarouselMultiElementsProps
} from './CarouselMultiElements'

export default {
  title: 'CarouselMutiElements',
  component: CarouselMultiElements
} as Meta

export const Default: Story<CarouselMultiElementsProps> = (args) => (
  <CarouselMultiElements {...args} />
)
