import { Story, Meta } from '@storybook/react'
import { AppFooter, AppFooterProps } from './AppFooter'

export default {
  title: 'AppFooter',
  component: AppFooter
} as Meta

export const Default: Story<AppFooterProps> = (args) => <AppFooter {...args} />
