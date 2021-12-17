import { Story, Meta } from '@storybook/react'
import {
  WhereWeArePanelFooter,
  WhereWeArePanelFooterProps
} from './WhereWeArePanelFooter'

import { mockPanelObj } from '@components/WhereWeAre/WhereWeAre'

export default {
  title: 'WhereWeArePanelFooter',
  component: WhereWeArePanelFooter,
  args: {
    ...mockPanelObj,
    address: `${mockPanelObj.city}, ${mockPanelObj.state} • ${mockPanelObj.country}`,
    expand: false
  }
} as Meta

export const Default: Story<WhereWeArePanelFooterProps> = (args) => (
  <WhereWeArePanelFooter {...args} />
)
