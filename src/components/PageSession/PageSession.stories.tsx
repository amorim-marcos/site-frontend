import { Story, Meta } from '@storybook/react'
import { PageSession, PageSessionProps } from './PageSession'

export default {
  title: 'PageSession',
  component: PageSession
} as Meta

export const Default: Story<PageSessionProps> = (args) => <PageSession {...args} />
