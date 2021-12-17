import { Story, Meta } from '@storybook/react'
import {
  WhereWeArePanelInfo,
  WhereWeArePanelInfoProps
} from './WhereWeArePanelInfo'

import { mockPanelObj } from '@components/WhereWeAre/WhereWeAre'

export default {
  title: 'WhereWeArePanelInfo',
  component: WhereWeArePanelInfo,
  args: { ...mockPanelObj.ourPlaceInformation }
} as Meta

export const Default: Story<WhereWeArePanelInfoProps> = (args) => (
  <WhereWeArePanelInfo {...args} />
)
