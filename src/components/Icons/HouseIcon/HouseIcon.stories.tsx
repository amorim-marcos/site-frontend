import { Story, Meta } from '@storybook/react'
import { HouseIcon } from './HouseIcon'

export default {
  title: 'HouseIcon',
  component: HouseIcon
} as Meta

export const Default: Story = (args) => <HouseIcon {...args} />
