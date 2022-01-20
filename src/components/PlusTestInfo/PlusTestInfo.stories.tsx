import { Story, Meta } from '@storybook/react'
import { PlusTestInfo, PlusTestInfoProps } from './PlusTestInfo'

export default {
  title: 'PlusTestInfo',
  component: PlusTestInfo
} as Meta

export const Default: Story<PlusTestInfoProps> = (args) => <PlusTestInfo {...args} />
