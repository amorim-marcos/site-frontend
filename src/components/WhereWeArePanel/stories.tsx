import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { Story, Meta } from '@storybook/react'
import WhereWeArePanel from '.'

export default {
  title: 'WhereWeArePanel',
  component: WhereWeArePanel
} as Meta

export const Default: Story = () => <WhereWeArePanel {...mockObject} />
