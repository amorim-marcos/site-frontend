import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { Story, Meta } from '@storybook/react'
import WhereWeArePanelFooter from '.'

export default {
  title: 'WhereWeArePanelFooter',
  component: WhereWeArePanelFooter
} as Meta

export const Default: Story = () => (
  <WhereWeArePanelFooter
    {...mockObject}
    address={`${mockObject.city}, ${mockObject.state} • ${mockObject.country}`}
    expand={false}
    onClick={() => console.log('clicked')}
  />
)
