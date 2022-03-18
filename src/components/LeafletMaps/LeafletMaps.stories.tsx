import { Story, Meta } from '@storybook/react'

import LeafletMaps from '.'
import { LeafletMapsProps } from './LeafletMaps'

export default {
  title: 'LeafletMaps',
  component: LeafletMaps
} as Meta

export const Default: Story<LeafletMapsProps> = (args) => (
  <LeafletMaps {...args} />
)
