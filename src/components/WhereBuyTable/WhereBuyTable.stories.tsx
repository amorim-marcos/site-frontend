import { Story, Meta } from '@storybook/react'
import { WhereBuyTable } from './WhereBuyTable'

export default {
  title: 'WhereBuyTable',
  component: WhereBuyTable
} as Meta

export const Default: Story = (args) => (
  <WhereBuyTable country_representatives={[]} {...args} />
)
