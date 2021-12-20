import { Story, Meta } from '@storybook/react'
import { TrajectoryCarousel, TrajectoryCarouselProps } from './TrajectoryCarousel'

export default {
  title: 'TrajectoryCarousel',
  component: TrajectoryCarousel
} as Meta

export const Default: Story<TrajectoryCarouselProps> = () => (
  <TrajectoryCarousel tabs={[]}/>
)
