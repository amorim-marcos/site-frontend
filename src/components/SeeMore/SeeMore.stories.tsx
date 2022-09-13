import { Story, Meta } from '@storybook/react'
import { SeeMore, SeeMoreProps } from './SeeMore'

export default {
  title: 'SeeMore',
  component: SeeMore
} as Meta

export const Default: Story<SeeMoreProps> = (args) => <SeeMore {...args} />
