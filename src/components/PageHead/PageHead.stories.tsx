import { Story, Meta } from '@storybook/react'
import { PageHead, PageHeadProps } from './PageHead'

export default {
  title: 'PageHead',
  component: PageHead
} as Meta

export const Default: Story<PageHeadProps> = (args) => <PageHead {...args} />
