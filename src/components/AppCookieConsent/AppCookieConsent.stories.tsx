import { Story, Meta } from '@storybook/react'
import { AppCookieConsent } from './AppCookieConsent'

export default {
  title: 'AppCookieConsent',
  component: AppCookieConsent
} as Meta

export const Default: Story = (args) => <AppCookieConsent {...args} />
