import { Story, Meta } from '@storybook/react'
import { TrajectoryCarousel, TrajectoryCarouselProps, mockCarouselObj } from './TrajectoryCarousel'

export default {
  title: 'TrajectoryCarousel',
  component: TrajectoryCarousel,
  args: mockCarouselObj
} as Meta

export const Default: Story<TrajectoryCarouselProps> = (args) => (
  <TrajectoryCarousel {...args}/>
)
