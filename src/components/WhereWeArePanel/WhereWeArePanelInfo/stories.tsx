import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { Story, Meta } from '@storybook/react'
import WhereWeArePanelInfo from '.'

export default {
  title: 'WhereWeArePanelInfo',
  component: WhereWeArePanelInfo
} as Meta

export const Default: Story = () => (
  <WhereWeArePanelInfo {...mockObject.ourPlaceInformation} />
)
