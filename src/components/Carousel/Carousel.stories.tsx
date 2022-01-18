import { Story, Meta } from '@storybook/react'
import { Carousel, CarouselProps } from './Carousel'

export default {
  title: 'Carousel',
  component: Carousel
} as Meta

export const Default: Story<CarouselProps> = (args) => <Carousel {...args} />
