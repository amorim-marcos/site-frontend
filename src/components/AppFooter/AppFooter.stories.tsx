import { Story, Meta } from '@storybook/react'
import { AppFooter } from './AppFooter'

export default {
  title: 'AppFooter',
  component: AppFooter
} as Meta

export const Default: Story = (args) => <AppFooter {...args} />
