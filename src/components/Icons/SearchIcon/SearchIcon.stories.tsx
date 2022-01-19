import { Story, Meta } from '@storybook/react'
import { SearchIcon, SearchIconProps } from './SearchIcon'

export default {
  title: 'SearchIcon',
  component: SearchIcon
} as Meta

export const Default: Story<SearchIconProps> = (args) => <SearchIcon {...args} />
