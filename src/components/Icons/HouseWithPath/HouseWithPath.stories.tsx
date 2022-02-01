import { Story, Meta } from '@storybook/react'
import { HouseWithPath, HouseWithPathProps } from './HouseWithPath'

export default {
  title: 'HouseWithPath',
  component: HouseWithPath
} as Meta

export const Default: Story<HouseWithPathProps> = (args) => <HouseWithPath {...args} />
