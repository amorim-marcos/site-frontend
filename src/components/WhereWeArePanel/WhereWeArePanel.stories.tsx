import { Story, Meta } from '@storybook/react'
import { WhereWeArePanel, WhereWeArePanelProps } from './WhereWeArePanel'

import { mockPanelObj } from '@components/WhereWeAre/WhereWeAre'

export default {
  title: 'WhereWeArePanel',
  component: WhereWeArePanel,
  args: { ...mockPanelObj }
} as Meta

export const Default: Story<WhereWeArePanelProps> = (args) => (
  <WhereWeArePanel {...args} />
)
