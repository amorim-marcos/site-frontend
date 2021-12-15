import { Story, Meta } from '@storybook/react'
import { NavLink, NavLinkProps } from './NavLink'

export default {
  title: 'NavLink',
  component: NavLink
} as Meta

export const Default: Story<NavLinkProps> = (args) => <NavLink {...args} />
