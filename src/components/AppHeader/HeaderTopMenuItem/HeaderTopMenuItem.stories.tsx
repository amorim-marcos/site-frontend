import { Story, Meta } from '@storybook/react'
import { HeaderTopMenuItem, HeaderTopMenuItemProps } from './HeaderTopMenuItem'

export default {
  title: 'HeaderTopMenuItem',
  component: HeaderTopMenuItem
} as Meta

export const Default: Story<HeaderTopMenuItemProps> = (args) => (
  <HeaderTopMenuItem {...args} />
)
