import { Story, Meta } from '@storybook/react'
import { AppHeader, AppHeaderProps } from './AppHeader'

export default {
  title: 'AppHeader',
  component: AppHeader
} as Meta

export const Default: Story<AppHeaderProps> = (args) => <AppHeader {...args} />
