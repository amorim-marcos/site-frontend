import { Story, Meta } from '@storybook/react'
import { Pagebar, PagebarProps } from './Pagebar'

export default {
  title: 'Pagebar',
  component: Pagebar
} as Meta

export const Default: Story<PagebarProps> = (args) => <Pagebar {...args} />
