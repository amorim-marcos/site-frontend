import { Story, Meta } from '@storybook/react'
import { mockPanels, WhereWeAre, WhereWeAreProps } from './WhereWeAre'

export default {
  title: 'WhereWeAre',
  component: WhereWeAre,
  args: { mockPanels }
} as Meta

export const Default: Story<WhereWeAreProps> = (args) => (
  <WhereWeAre {...args} />
)
